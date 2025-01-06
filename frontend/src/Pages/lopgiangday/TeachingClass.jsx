import React, { useState } from 'react'
import { EuiBadge, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard,EuiCodeBlock, EuiConfirmModal, EuiContextMenu, EuiDatePicker, EuiDatePickerRange, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiSpacer, EuiText } from "@elastic/eui"
import moment from 'moment'


export default function TeachingClass() {
    const [popoverBlock,setPopoverBlock]=useState(false)
    const [popoverMenu,setPopoverMenu]=useState(null)

    const togglePopoverMenu = (id) => {
        setPopoverMenu((currentId) => (currentId === id ? null : id));
      };


    const [optionBlock,setOptionBlock]=useState([
        {label:"Khối"},
        {label:"Tất cả"},
        {label:"Khối 10"},
        {label:"Khối 11"},
        {label:"Khối 12"},
    ])
    const selectBlock=optionBlock.filter(o=>o.checked==="on")


    const columns=[
        {field:"class",name:"Lớp",
            render:(item)=>(
                <EuiPopover
                panelPaddingSize='none'
                anchorPosition='rightUp'
                isOpen={popoverMenu===item}
                closePopover={()=>setPopoverMenu(null)}
                button={
                    <EuiLink onClick={()=>togglePopoverMenu(item)}>{item}</EuiLink>
                }>
                     <EuiContextMenu 
                        initialPanelId={0}
                        panels={[
                            {
                                id:0,
                                items:[
                                    {
                                        name: 'Điểm danh',
                                        href:"diemdanh",
                                    },
                                    {
                                        name: 'Bảng điểm',
                                        href:"/bangdiem"
                                    },
                                    {
                                        name: 'Sổ đầu bài',
                                        href:"/sodaubai"
                                    },
                                ]
                            },
                        ]}
                        />
                </EuiPopover>
            ),
        },
        {field:"teacher",name:"Giáo viên chủ nhiệm"},
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại",},
        {field:"classroom",name:"Phòng học cố định"},
        {field:"quantity",name:"Số học sinh",},
    ]
    const items=[
        {id:1,class:"10A1",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:2,class:"10A2",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:3,class:"10A3",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:4,class:"10A4",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:5,class:"10A5",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:6,class:"10A6",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:7,class:"10A7",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:8,class:"10A8",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:9,class:"10A9",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:10,class:"10A10",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:11,class:"10A11",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
        {id:12,class:"10A12",teacher:"Lê Chí Tuyền",email:"bachkhoa@gmail.com",phone:"0123456789",classroom:"B6",quantity:40},
    ]

    const [pageIndex,setPageIndex]=useState(0)
        const [pageSize,setPageSize]=useState(10)
    
        const onChange=({page,sort})=>{
            const {index:pageIndex,size:pageSize}=page
            setPageIndex(pageIndex)
            setPageSize(pageSize)
        }
    
        const itemOfPage=(items,pageIndex,pageSize)=>{
            let itemOfPages;
            if(!pageIndex && !pageSize){
                itemOfPages=items
            }else{
                itemOfPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
            }
            return itemOfPages
        }
        const itemOfPages=itemOfPage(items,pageIndex,pageSize)
    
        const pagination={
            pageIndex,
            pageSize,
            totalItemCount:items.length,
            pageSizeOptions:[0,5,10,20]
        }
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup gutterSize='s' alignItems='center'>
                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                    <EuiText><h2>Lớp giảng dạy</h2></EuiText>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem grow={2}>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm theo tên lớp' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <EuiPopover
                        hasArrow={false}
                        panelStyle={{outline:"none",width:"400px"}}
                        isOpen={popoverBlock}
                        closePopover={()=>setPopoverBlock(false)}
                        button={
                            <EuiFormControlLayout style={{fontSize:'14px'}} onClick={()=>setPopoverBlock(!popoverBlock)} isDropdown fullWidth>
                                <EuiFieldText placeholder='Khối' value={selectBlock[0]?.label} fullWidth/>
                            </EuiFormControlLayout>
                        }>
                            <EuiSelectable
                            options={optionBlock}
                            singleSelection
                            onChange={(option)=>setOptionBlock(option)}
                            >
                            {(list)=>(
                                <>{list}</>
                            )}
                            </EuiSelectable>
                        </EuiPopover>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiText size='s'>Tổng số lớp phụ trách: 10</EuiText>
            <EuiSpacer size='xs'/>
            <EuiHorizontalRule margin='none'/>
            <EuiBasicTable
            tableLayout='fixed'
            itemId="id"
            columns={columns}
            items={itemOfPages}
            onChange={onChange}
            pagination={pagination}/>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
