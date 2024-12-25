import { Comparators, EuiAccordion, EuiAvatar, EuiBasicTable, EuiButtonIcon, EuiComboBox, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiLink, EuiSelect, EuiSpacer, EuiSplitPanel, EuiText, EuiTitle } from '@elastic/eui'
import React, { useState } from 'react'

export default function MorningSchedule() {

    const columns=[
        {field:"avatar",name:"",
            render:(item)=>(
                <EuiAvatar name='A' imageUrl='' iconType={item} color="#6DCCB1"/>
            ),
            width:'50px'
        },
        {field:"name",name:"Họ và tên giáo viên",sortable: true,},
        {field:"id",name:"ID giáo viên",
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"subject",name:"Bộ môn phụ trách",sortable: true,},
        {field:"birthday",name:"Ngày sinh"},
        {field:"class",name:"Phân công lớp",
            render:(item)=>(
                <EuiComboBox
                selectedOptions={item.map(i=>({label:i}))}
                options={[
                    {label:"10A1"}
                ]}/>
            )
        },
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiFlexGroup gutterSize='none'>
                    <EuiButtonIcon iconType="indexEdit" color='success'/>
                    <EuiButtonIcon iconType="trash" color='danger'/>
                </EuiFlexGroup>
            )
        },
    ]

    const items=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242021",subject:"Toán học",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242022",subject:"Ngữ văn",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242023",subject:"Vật lí",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242024",subject:"Hóa học",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Nguyễn Thị Thanh",id:"20242025",subject:"Tiếng anh",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Thanh Thị Nguyễn",id:"20242026",subject:"Sinh họchọc",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:"20242027",subject:"Toán học",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
        {avatar:"userAvatar",name:"Tuyền Chí Lê",id:"202420288",subject:"Toán học",birthday:"30/02/2024",class:["10A1","102","10A3","10A4"]},
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
    <EuiSplitPanel.Inner grow={false}>
        <EuiAccordion id='1'
        buttonContent={<EuiText size='s'><b>Sắp xếp lớp buổi sáng</b></EuiText>}
        arrowDisplay="right"
        initialIsOpen={true}>
            <EuiSpacer/>
            <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                    <EuiFormRow fullWidth>
                        <EuiFieldSearch placeholder='Tìm kiếm theo tên giáo viên' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={1}>
                    <EuiFormRow fullWidth>
                        <EuiSelect  options={[
                            {value:'',text:'Chức vụ'},
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={1}>
                    <EuiFormRow fullWidth>
                        <EuiSelect options={[
                            {value:'',text:'Toán học'},
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiBasicTable
            tableLayout='auto'
            items={itemOfPages}
            columns={columns}
            onChange={onChange}
            pagination={pagination}
            sorting={sorting}/>
        </EuiAccordion>
    </EuiSplitPanel.Inner>
  )
}
