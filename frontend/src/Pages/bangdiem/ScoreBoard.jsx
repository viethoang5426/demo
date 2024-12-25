import React, { useState } from 'react'
import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiCheckbox, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiIcon, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiSpacer, EuiText } from "@elastic/eui"

export default function ScoreBoard() {

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
        {field:'diemMieng',name:"Điểm miệng"},
        {field:'kiemtra15p',name:"Điểm KT 15'"},
        {field:'kiemtra45p',name:"Điểm KT 45'"},
        {field:'thi',name:'Điểm thi'},
        {field:'tongket',name:"Điểm tổng kết",},
        {field:'vang',name:"Số lần vắng",},
        {field:'thaotac',name:"Thao tác",
            render:()=>(
                <EuiButtonIcon iconType="indexEdit" color='success'/>
            )
        }
    ]
    const items=[
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
        {avatar:"userAvatar",name:'Lê Chí Tuyền',id:20242024,diemMieng:10,kiemtra15p:10,kiemtra45p:10,thi:10,tongket:10,vang:"10/20"},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)

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

  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup gutterSize='s' alignItems='center'>
                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                    <EuiText><h2>Bảng điểm: Lớp 10A1</h2></EuiText>
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
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' size='s' iconSize='s'>Năm học: 2024</EuiButtonEmpty>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiBasicTable 
                tableLayout='auto'
                columns={columns}
                items={userByPages}
                itemId="id"
                pagination={paginations}
                onChange={onChange}/>
            <EuiSpacer/>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButton fill iconType="save">Lưu</EuiButton>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
