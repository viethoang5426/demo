import React, { useState } from 'react'
import { EuiAvatar,EuiBasicTableColumn, EuiBasicTable, EuiButton,Comparators, EuiButtonIcon, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiIcon, EuiLink, EuiPageTemplate, EuiSelect, EuiText, Criteria } from '@elastic/eui'
import AddAcountTeacher from '../../Components/AddAccount/AddAcountTeacher'
import AddAccountStudent from '../../Components/AddAccount/AddAccountStudent'

type Account={
    avatar:string,
    name:string,
    id:string,
    email:string,
    phone:string,
    gender:string,
    role:string,
    birthday:string
}

export default function AccountManagement() {

    const [modalAddAccount,setModalAddAccount]=useState(false)

    const columns:Array<EuiBasicTableColumn<Account>>=[
        {field:"avatar",name:"",width:"50px",
            render:(item:Account["avatar"])=>(
                <EuiAvatar name='Avatar' iconType={item} color="#68C4A2"/>
            )
        },
        {field:"name",name:"Họ và tên người dùng",sortable: true,},
        {field:"id",name:"ID người dùng",
            render:(item:Account["id"])=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại liên lạc"},
        {field:"gender",name:"Giới tính"},
        {field:"role",name:"Phân quyền"},
        {field:"birthday",name:"Ngày sinh"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="documentEdit" color='success'/>
                    <EuiButtonIcon iconType="trash" color='danger'/>
                </EuiFlexGroup>
            )
        },
    ]

    const items:Account[]=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",role:"Học sinh",birthday:"30/12/2024"},
    ]


    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)
    const [sortField, setSortField] = useState<keyof Account>('name');
    const [sortDirection, setSortDirection] = useState<'asc'| 'desc'>('asc');
    const onChange=({page,sort}:Criteria<Account>)=>{
        if(page){
            const {index:pageIndex,size:pageSize}=page
            setPageIndex(pageIndex)
            setPageSize(pageSize)
        }
        if (sort) {
            const { field: sortField, direction: sortDirection } = sort;
            setSortField(sortField);
            setSortDirection(sortDirection);
          }
    }

    const itemOfPage=(items:Account[],pageIndex:number,pageSize:number,sortField:keyof Account,sortDirection:'asc'|'desc')=>{
        let data;
        if (sortField) {
            data = items
                .slice(0)
                .sort(
                Comparators.property(sortField, Comparators.default(sortDirection))
                );
            } else {
            data = items;
        }
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=data
        }else{
            itemOfPages=data.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return itemOfPages
    }
    const itemOfPages=itemOfPage(items,pageIndex,pageSize,sortField,sortDirection)

    const pagination={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[0,5,10,20]
    }
    const sorting = {
        sort: {
          field: sortField,
          direction: sortDirection,
        },
      };


  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
            pageTitle={
                <EuiFlexGroup direction='column' gutterSize='s'>
                    <EuiFlexGroup>
                        <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                            <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                            <EuiText><h3>Quản lý tài khoản</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiButton iconType="plusInCircle"onClick={()=>setModalAddAccount(true)} fill>Tạo mới tài khoản</EuiButton>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center'>
                        <EuiFlexItem>
                            <EuiFormRow fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo ID người dùng ...' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem >
                            <EuiFormRow fullWidth>
                                <EuiSelect options={[
                                    {value:"",text:"Trường học"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow fullWidth>
                                <EuiSelect options={[
                                    {value:"",text:"Phân quyền"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexGroup>
            }/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section >
            <EuiBasicTable
            tableLayout='auto'
            items={itemOfPages}
            columns={columns}
            onChange={onChange}
            pagination={pagination}
            sorting={sorting}
            />
        </EuiPageTemplate.Section>
        {modalAddAccount&&<AddAccountStudent setModalAddAccount={setModalAddAccount}/>}
    </EuiPageTemplate>
  )
}
