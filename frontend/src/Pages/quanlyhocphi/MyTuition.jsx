import React, { useState } from 'react'
import { EuiBadge, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard,EuiCodeBlock, EuiConfirmModal, EuiDatePicker, EuiDatePickerRange, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"
import moment from 'moment'


export default function MyTuition() {
    const [startDate,setStartDate]=useState(moment())
    const [endDate,setEndDate]=useState(moment())


    const columns=[
        {field:"name",name:"Tên chi phí",
            render:(item)=>(
                <EuiText color='#0071C2'>{item}</EuiText>
            ),
            footer:()=>(
                <EuiText color='#0071C2'>Tổng chi phí</EuiText>
            )
        },
        {field:"category",name:"Phân loại"},
        {field:"startDate",name:"Thời gian bắt đầu"},
        {field:"price",name:"Số tiền(VNĐ)",
            footer:()=>(
                <EuiText>10.000.000</EuiText>
            )
        },
        {field:"dateRanger",name:"Từ ngày-Đến ngày"},
        {field:"status",name:"Trạng thái",
            render:(item)=>(
                <EuiBadge><EuiHealth color='success'>{item}</EuiHealth></EuiBadge>
            )
        },
    ]
    const items=[
        {id:1,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:2,name:"Phí ăn trưa",category:"Tự chọn",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:3,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:4,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:5,name:"Học phí",category:"Nội quy",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:6,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:7,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:8,name:"Học phí",category:"Nội quy",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:9,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:10,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:11,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:12,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
        {id:13,name:"Học phí",category:"Bắt buộc",startDate:"11/07/2020 01:44",price:"10.000.000",dateRanger:"30/02/2024->30/02/2024",status:"Đã đóng"},
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

        const [selectedItems, setSelectedItems] = useState([]);
        const onSelectionChange = (selection) => {
            setSelectedItems(selection);
        };
        const selection={
            selectable:(item)=>item.name!=='',
            selectableMessage:(selectable)=>
                !selectable ? 'Người này không thể chọn' : undefined,
            onSelectionChange,
        }
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup gutterSize='s' alignItems='center'>
                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                    <EuiText><h2>Học phí của tôi</h2></EuiText>
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
                        <EuiFormRow style={{fontSize:'14px'}} >
                            <EuiDatePickerRange
                                startDateControl={
                                    <EuiDatePicker selected={startDate} onChange={date=>setStartDate(date)}/>
                                }
                                endDateControl={
                                    <EuiDatePicker selected={endDate} onChange={date=>setEndDate(date)}/>
                                } fullWidth/>
                        </EuiFormRow>
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
            itemId="id"
            columns={columns}
            items={itemOfPages}
            selection={selection}
            onChange={onChange}
            pagination={pagination}/>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButton iconType="save" fill>Lưu</EuiButton>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
