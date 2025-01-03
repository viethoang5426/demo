import React, { useState } from 'react'
import { EuiBadge, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard,EuiCodeBlock, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"
import AddTuition from './AddTuition'
import EditTuition from './EditTuition'

export default function TuitionManagement() {
    const [isConfirm,setIsConFirm]=useState(false)
    const [isModalAdd,setIsModalAdd]=useState(false)
    const [isModalEdit,setIsModalEdit]=useState(false)

    let Confirm;
    if(isConfirm){
        Confirm=(
            <EuiConfirmModal
            title="Xác nhận xóa học phí"
            onCancel={()=>setIsConFirm(false)}
            onConfirm={()=>{}}
            cancelButtonText="Hủy"
            confirmButtonText="Xác nhận"
            buttonColor="danger"
            defaultFocusedButton="confirm">
                <EuiText size='s'>Bạn có chắc chắn muốn xóa học phí "Học phí khối 10"</EuiText>
            </EuiConfirmModal>
        )
    }

    const columns=[
        {field:"name",name:"Tên phí thu",},
        {field:"price",name:"Số tiền(VNĐ)"},
        {field:"category",name:"Phân loại"},
        {field:"scope",name:"Phạm vi"},
        {field:"date",name:"Từ ngày-Đến ngày"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="indexEdit" onClick={()=>setIsModalEdit(true)} color='success'/>
                    <EuiButtonIcon iconType="trash" onClick={()=>setIsConFirm(true)} color='danger'/>
                </EuiFlexGroup>
            )
        },
    ]
    const items=[
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Phí ăn trưa",price:"10.000.000",category:"Tự chọn",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Nội quy",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Nội quy",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
        {name:"Học phí",price:"10.000.000",category:"Bắt buộc",scope:"Toàn trường",date:"30/02/2024->30/02/2024",},
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
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem>
                        <EuiFlexGroup gutterSize='s' alignItems='center'>
                            <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                            <EuiText><h2>Quản lý học phí</h2></EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButton fill iconType="plusInCircle" onClick={()=>setIsModalAdd(true)}>Thêm mới phí thu</EuiButton>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm theo tên chi phí ...' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiFormControlLayout style={{fontSize:'14px'}} isDropdown fullWidth>
                            <EuiFieldText placeholder='Phân loại' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s'>Học kỳ: I</EuiButtonEmpty>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiBasicTable
            tableLayout='fixed'
            columns={columns}
            items={itemOfPages}
            onChange={onChange}
            pagination={pagination}/>
        </EuiPageTemplate.Section>
        {Confirm}
        {isModalAdd&&<AddTuition setIsModalAdd={setIsModalAdd}/>}
        {isModalEdit&&<EditTuition setIsModalEdit={setIsModalEdit}/>}
    </EuiPageTemplate>
  )
}
