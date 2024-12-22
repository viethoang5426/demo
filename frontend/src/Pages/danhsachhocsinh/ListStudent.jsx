import { EuiPageTemplate,EuiFlexGroup,EuiButtonIcon,EuiTableSortingType,EuiAvatar,EuiLink,Comparators,EuiText,EuiFlexItem, EuiFormRow,EuiButton,EuiSelect,EuiHorizontalRule, EuiFieldText, EuiBasicTable, EuiFieldSearch, EuiPopover, EuiContextMenu, EuiIcon, EuiSelectable, EuiFormControlLayout, EuiButtonEmpty } from '@elastic/eui'
import React, { useState } from 'react'

export default function ListStudent() {
    const [openPopoverId, setOpenPopoverId] = useState(null);
    const togglePopover = (id) => {
        setOpenPopoverId((currentId) => (currentId === id ? null : id));
      };
    
      const closePopover = () => {
        setOpenPopoverId(null);
      };

    const columns=[
        {field:"avatar",name:"",width:"50px",
            render:(item)=>(
                <EuiAvatar name='Avatar' iconType={item} color="#68C4A2"/>
            )
        },
        {field:"name",name:"Họ và tên học sinh",sortable: true,},
        {field:"id",name:"ID học sinh",
            render:(item)=>(
                <EuiPopover
                    panelPaddingSize='s'
                    anchorPosition='leftUp'
                    isOpen={openPopoverId===item}
                    closePopover={closePopover}
                    button={
                        <EuiLink onClick={()=>togglePopover(item)}>{item}</EuiLink>
                    }>
                        <EuiContextMenu 
                        initialPanelId={0}
                        panels={[
                            {
                                id:0,
                                items:[
                                    {
                                        name: 'Sổ liên lạc điện tử',
                                        onClick:()=>{}
                                    },
                                    {
                                        name: 'Thời khóa biểu',
                                        onClick:()=>{}
                                    },
                                    {
                                        name: 'Kết quả học tập',
                                        onClick:()=>{}
                                    },
                                    {
                                        name: 'Học bạ học sinh',
                                        panel:1,
                                        onClick:()=>{}
                                    },
                                ]
                            },
                            {
                                id: 1,
                                initialFocusedItemIndex: 1,
                                title: 'Học bạ học sinh',
                                items: [
                                ],
                                },
                        ]}
                        />
                </EuiPopover>
            )
        },
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại liên lạc"},
        {field:"gender",name:"Giới tính"},
        {field:"birthday",name:"Ngày sinh",},
    ]

    const items=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242021",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242022",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242023",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242025",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242026",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242027",email:"lechituyen@gmail.com",phone:"028372838",gender:"Nam",birthday:"30/12/2024"},
    ]


    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const onChange=({page,sort})=>{
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

    const itemOfPage=(items,pageIndex,pageSize,sortField,sortDirection)=>{
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
                <EuiFlexGroup direction='column'>
                    <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                        <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                        <EuiText><h2>Danh sách học sinh</h2></EuiText>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center'>
                            <EuiText><b>Tổng số học sinh:</b>&nbsp;50</EuiText>
                        <EuiFlexItem grow={2}>
                            <EuiFormRow style={{fontSize:'14px'}} fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo tên học sinh/ ID học sinh' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect
                                options={[
                                    {label:"Khối"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect
                                options={[
                                    {label:"Lớp"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexGroup>
            }/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiBasicTable
                tableLayout='auto'
                itemId="id"
                items={itemOfPages}
                columns={columns}
                onChange={onChange}
                pagination={pagination}
                sorting={sorting}
                />
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
