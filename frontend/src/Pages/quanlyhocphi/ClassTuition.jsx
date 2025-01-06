import React, { useState } from 'react'
import { EuiAvatar, EuiBadge, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard,EuiCodeBlock, EuiConfirmModal, EuiDatePicker, EuiDatePickerRange, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"
import moment from 'moment'


export default function ClassTuition() {

    const columns=[
        {field:"name",name:"Tên phí thu",
            render:(item)=>(
                <EuiText color='#0071C2'>{item}</EuiText>
            ),
        },
        {field:"price",name:"Số tiền(VNĐ)"},
        {field:"category",name:"Phân loại"},
        {field:"dateRanger",name:"Từ ngày-Đến ngày"},
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

    const column2=[
        {field:"avatar",name:"",
            render:(item)=>(
                <EuiAvatar name='A' imageUrl={item} iconType={item}/>
            ),
            width:"50px"
        },
        {field:"name",name:"Họ và tên học sinh"},
        {field:"id",name:"ID học sinh"},
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại liên lạc"},
        {field:"gender",name:"Giói tính"},
        {field:"birthday",name:"Ngày sinh"},
        {field:"status",name:"Trạng thái"},
    ]
    const item2=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242021,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2001",status:"Đã đóng"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242022,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2001",status:"Đã đóng"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242023,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2001",status:"Chưa đóng"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2001",status:"Hết hạn"},
    ]

    const [pageIndex,setPageIndex]=useState(0)
        const [pageSize,setPageSize]=useState(10)
    
        const onChange=({page,sort})=>{
            const {index:pageIndex,size:pageSize}=page
            setPageIndex(pageIndex)
            setPageSize(pageSize)
        }
    
        const itemOfPage=(item2,pageIndex,pageSize)=>{
            let itemOfPages;
            if(!pageIndex && !pageSize){
                itemOfPages=item2
            }else{
                itemOfPages=item2.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
            }
            return itemOfPages
        }
        const itemOfPages=itemOfPage(item2,pageIndex,pageSize)
    
        const pagination={
            pageIndex,
            pageSize,
            totalItemCount:item2.length,
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
                    <EuiText><h2>Học phí lớp chủ nhiệm</h2></EuiText>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem>
                        <EuiText><b>Lớp: 10A1</b></EuiText>
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
            items={items}/>
            <EuiBasicTable
            columns={column2}
            items={itemOfPages}
            pagination={pagination}
            onChange={onChange}
            itemId="id"
            selection={selection}/>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButton iconType="save" fill>Lưu</EuiButton>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
