import { EuiPageTemplate,EuiFlexGroup,EuiButtonIcon,EuiTableSortingType,EuiAvatar,EuiLink,Comparators,EuiText,EuiFlexItem, EuiFormRow,EuiButton,EuiSelect,EuiHorizontalRule, EuiFieldText, EuiBasicTable, EuiFieldSearch, EuiPopover, EuiContextMenu, EuiIcon, EuiSelectable, EuiFormControlLayout } from '@elastic/eui'
import React, { useState } from 'react'

export default function ListTeacher_Admin() {
    const [openPopoverId, setOpenPopoverId] = useState(null);
    const togglePopover = (id) => {
        setOpenPopoverId((currentId) => (currentId === id ? null : id));
      };
    
      const closePopover = () => {
        setOpenPopoverId(null);
      };

      const [isPopoverSubject,setIsPopoverSubject]=useState(false)
      const [options, setOptions] = useState([
        {label: 'Toán học',},
        {label: 'Ngữ văn',},
        {label: 'Vật lý',},
        {label: 'Hóa học',}
    ])
    const selectedSubject=options.filter(option=>option.checked==="on")

    const columns=[
        {field:"avatar",name:"",width:"50px",
            render:(item)=>(
                <EuiAvatar name='Avatar' iconType={item} color="#68C4A2"/>
            )
        },
        {field:"name",name:"Họ và tên giáo viên",sortable: true,},
        {field:"id",name:"ID giáo viên",
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"birthday",name:"Ngày sinh",},
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại liên lạc"},
        {field:"subject",name:"Bộ môn",sortable: true,},
        {field:"action",name:"Lớp chủ nhiệm",
            render:(item)=>(
                <EuiPopover
                panelPaddingSize='s'
                anchorPosition='leftUp'
                isOpen={openPopoverId===item}
                closePopover={closePopover}
                button={
                    <EuiButtonIcon iconType="training" onClick={()=>togglePopover(item)}/>
                }>
                    <EuiContextMenu 
                    initialPanelId={0}
                    panels={[
                        {
                            id:0,
                            items:[
                                {
                                    name: 'Thông tin giáo viên',
                                    onClick:()=>{}
                                },
                                {
                                    name: 'Thời khóa biểu',
                                    onClick:()=>{}
                                },
                                {
                                    name: 'Lớp chủ nhiệm',
                                    onClick:()=>{}
                                },
                                {
                                    name: 'Lớp giảng dạy',
                                    panel:1,
                                    onClick:()=>{}
                                },
                            ]
                        },
                        {
                            id: 1,
                            initialFocusedItemIndex: 1,
                            title: 'Lớp giảng dạy',
                            items: [
                              {
                                name: '10A1',
                                onClick: ()=>{},
                              },
                            ],
                          },
                    ]}
                    />
                </EuiPopover>
            )
        },
    ]

    const items=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Toán học",action:1},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Ngữ văn",action:2},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Vật lý",action:3},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Sinh học",action:4},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Tiếng anh",action:5},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Hóa học",action:6},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",birthday:"30/12/2024",email:"lechituyen@gmail.com",phone:"028372838",subject:"Vật lý",action:7},
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
                        <EuiText><h2>Giáo viên</h2></EuiText>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center'>
                            <EuiText><b>Tổng số giáo viên:</b>&nbsp;50</EuiText>
                        <EuiFlexItem grow={2}>
                            <EuiFormRow style={{fontSize:'14px'}} fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo tên giáo viên/ ID giáo viên' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow onClick={()=>setIsPopoverSubject(!isPopoverSubject)} fullWidth style={{fontSize:'14px'}}>
                                <EuiPopover
                                hasArrow={false}
                                panelPaddingSize='s'
                                isOpen={isPopoverSubject}
                                closePopover={()=>setIsPopoverSubject(false)}
                                button={
                                    <EuiFormControlLayout isDropdown>
                                        <EuiFieldText placeholder='Bộ môn' value={selectedSubject[0]?.label} fullWidth/>
                                    </EuiFormControlLayout>
                                    }>
                                <EuiSelectable
                                options={options}
                                singleSelection
                                searchable
                                searchProps={{placeholder:"Tìm kiếm tên bộ môn"}}
                                onChange={(newOptions) => setOptions(newOptions)}>
                                    {(list, search) => (
                                        <>
                                        {search}
                                        {list}
                                        </>
                                    )}
                                </EuiSelectable>
                                </EuiPopover>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}></EuiFlexItem>
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
