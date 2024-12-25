import React, { useState } from 'react'
import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiCheckbox, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiIcon, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiSpacer, EuiText } from "@elastic/eui"

export default function AttendanceAI() {

    const columns=[
        {
            field:'avatar',
            name:'',
            render:(item)=>(
                <EuiAvatar name='DN' imageUrl={item} iconType={item} color="#6DCCB1"/>
            ),
            width:'50px'
        },
        {field:'name',name:'Họ và tên học sinh'},
        {field:'id',name:'ID học sinh',
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:'absent',name:'Số lần vắng'},
        {field:'NoPermission',name:"Không phép",
            render:()=>(
                <EuiCheckbox/>
            )
        }
    ]
    const items=[
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737731',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737732',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737733',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737734',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737735',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737736',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737737',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737738',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737739',gender:'Nam',absent:"01"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:'73737730',gender:'Nam',absent:"01"},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const userByPage=(items,pageIndex,pageSize)=>{
        let userByPages;
        if(!pageIndex && !pageSize){
            userByPages=items
        }else{
            userByPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {userByPages}
    }
    const {userByPages}=userByPage(items,pageIndex,pageSize)

    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[0,5,10]
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
                    <EuiText><h2>Điểm danh: Lớp 10A1</h2></EuiText>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem grow={2}>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm theo tên học sinh ...' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={2}>
                        <EuiFlexGroup alignItems='center'>
                            <EuiAvatar name='A' imageUrl='/assets/avat.png'/>
                            <EuiText size='s'><b>GVCN:&nbsp;Lê Chí Tuyền</b></EuiText>
                            <EuiText size='s'><b>Tổng số học sinh:&nbsp;</b>40</EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <EuiFlexGroup gutterSize='s'>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' size='s' iconSize='s'>Học kỳ: I</EuiButtonEmpty>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' size='s' iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
           <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiImage src='/assets/ai.png' style={{borderRadius:'14px',width:'100%',height:"500px"}}/>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiText size='s'>ĐIỂM DANH NGÀY: 15/11/2024</EuiText>
                    <EuiSpacer size='s'/>
                    <EuiHorizontalRule margin='none'/>
                    <EuiBasicTable 
                    tableLayout='auto'
                    selection={selection}
                    columns={columns}
                    items={userByPages}
                    itemId="id"
                    pagination={paginations}
                    onChange={onChange}/>
                </EuiFlexItem>
           </EuiFlexGroup>
            <EuiSpacer/>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButton iconType="plusInCircle">Đặt lại</EuiButton>
                <EuiButton fill iconType="save">Lưu</EuiButton>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
