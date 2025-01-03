import { EuiButtonIcon, EuiFlexGroup, EuiPageTemplate,EuiBasicTable,EuiLink,EuiHealth,EuiFormRow,EuiTextArea, EuiText,EuiFlexItem,EuiButton,EuiAvatar,EuiPopover,EuiIcon, EuiButtonEmpty, EuiHorizontalRule, EuiSpacer, EuiPageSection, EuiPageBody, EuiConfirmModal, EuiTitle, EuiSelect } from '@elastic/eui'
import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import ApexChart from '../../Components/Chart/ApexChart';
import HighChart from '../../Components/Chart/HighChart';

export default function StudentTranscriptView() {
    const [subjects,setSubjects]=useState([
        {value:"Toán",label:"Toán"},
        {value:"Lý",label:"Lý"},
        {value:"Hóa",label:"Hóa"},
    ])

    const [selected,setSelected]=useState("")

    const column=[
        {
            field:'monhoc',
            name:'Tên môn học',
            render:(item)=>(
                <EuiLink size='s'>{item}</EuiLink>
            ),
        },
        {
            field:'ktm',
            name:'Kiểm tra miệng',

        },
        {
            field:'kt15p',
            name:'Kiểm tra 15p',
        },
        {
            field:'kt1t',
            name:'Kiểm tra 1 tiết',
        },
        {
            field:'ktgk',
            name:'Kiểm tra giữa kì',
        },
        {
            field:'ktck',
            name:'Kiểm tra cuối kì',
        },
        {
            field:'gv',
            name:'Giáo viên phụ trách',
        },
    ]

    const item=[
        {monhoc:'Toán học',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Ngữ văn',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Tiếng anh',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Vật lý',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Hóa học',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Sinh học',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Địa lý',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Lịch sử',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Giáo dục công dân',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Công nghệ',ktm:10,kt15p:10,kt1t:10,ktgk:10,ktck:10,gv:'Lê Chí Tuyền'},
    ]
    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }
    const itemOfPage=(item,pageIndex,pageSize)=>{
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=item
        }else{
            itemOfPages=item.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPages}
    }
    const {itemOfPages}=itemOfPage(item,pageIndex,pageSize)
    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:item.length,
        pageSizeOptions:[0,5,10]
    }



  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header 
        bottomBorder={false}
        alignItems='center'
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup justifyContent='spaceBetween'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={false}>
                                    <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiText><h2>Học bạ học sinh</h2></EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButton fill iconType="plusInCircle">Chỉnh sửa</EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFlexGroup alignItems='center' gutterSize='m'>
                                <EuiAvatar name='' imageUrl='/assets/avat.png'/>
                                <EuiText size='s'><span><strong>Họ và tên:&nbsp;</strong>Lê Chí Tuyền</span></EuiText>
                                <EuiText size='s'><span><strong>Lớp:&nbsp;</strong>12A12</span></EuiText>
                                <EuiText size='s'><span><strong>Trường:&nbsp;</strong>THPT Bách Khoa</span></EuiText>
                                <EuiText size='s'><span><strong>Ngày sinh:&nbsp;</strong>20/10/2024</span></EuiText>
                                <EuiText size='s'><span><strong>Email:&nbsp;</strong>lechituyen@gmail.com</span></EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiButtonEmpty iconSide='right' iconType="arrowDown" iconSize='s'>Học kì: I</EuiButtonEmpty>
                                <EuiButtonEmpty iconSide='right' iconType="arrowDown" iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        } 
        />
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section >
        {/* <EuiBasicTable
        columns={column}
        items={itemOfPages}
        onChange={onChange}
        pagination={paginations}/> */}
        <EuiFlexGroup direction='column' gutterSize='m' style={{border:'1px solid #E1E7EC',borderRadius:'5px'}}>
            <EuiFlexItem style={{paddingInline:'24px'}}>
                <EuiText><h3>Title</h3></EuiText>
                <EuiSpacer size='s'/>
                <EuiFlexGroup gutterSize='s'>
                    <EuiFlexItem grow={false}>
                        <EuiSelect
                        onChange={(e)=>setSelected(e.target.value)}
                            options={[
                                { text: "Metric", value: "" },
                                ...subjects.map(s=>({
                                text:s.label,
                                value:s.value
                            }))]}/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiSelect
                            options={[
                                {value:"Today",label:"Today"}
                            ]}/>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexItem>
            <EuiHorizontalRule margin='none'/>
            <EuiFlexItem>
                <ApexChart selected={selected}/>
                {/* <HighChart/> */}
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
