import React, { useState } from 'react'
import { EuiPageTemplate,EuiFlexGroup,EuiLink,EuiFlexItem,EuiButtonIcon,EuiText,EuiButton,EuiAvatar,EuiButtonEmpty, EuiHorizontalRule, EuiTabs, EuiTab, EuiSpacer, EuiBasicTable, EuiPageSection, EuiBadge, EuiHealth, EuiTablePagination } from "@elastic/eui"


export default function Debt() {
    const [classId,setClassId]=useState(null)
    const [studentId,setStudentId]=useState(null)

    const column1=[
        {field:"class",name:"Lớp",
            render:(item)=>(
                <EuiLink onClick={()=>setClassId(item)}>{item}</EuiLink>
            )
        },
        {field:"teacher",name:"Giáo viên chủ nhiệm"},
        {field:"student",name:"Số học sinh"},
        {field:"collected",name:"Đã thu"},
        {field:"total",name:"Tổng thu"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiButtonIcon iconType="arrowDown"/>
            ),
            width:'100px'
        },
    ]
    const item1=[
        {class:"10A1",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
        {class:"10A2",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
        {class:"10A3",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
        {class:"10A4",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
        {class:"10A5",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
        {class:"10A6",teacher:"Lê Chí Tuyền",student:40,collected:40,total:40},
    ]

    const column2=[
        {field:"avatar",name:"",
            render:(item)=>(
                <EuiAvatar name='A' imageUrl={item} iconType={item}/>
            ),
            width:"50px"
        },
        {field:"name",name:"Họ và tên học sinh",
            render:(item)=>(
                <EuiLink onClick={()=>setStudentId(item)}>{item}</EuiLink>
            )
        },
        {field:"id",name:"ID học sinh",
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"email",name:"Email"},
        {field:"phone",name:"Số điện thoại liên lạc"},
        {field:"gender",name:"Giới tính"},
        {field:"birthday",name:"Ngày sinh"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiButtonIcon iconType="arrowDown"/>
            ),
            width:'100px'
        },
    ]
    const item2=[
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
        {avatar:"userAvatar",name:"Lê Chí Tuyền",id:20242024,email:"lechituyen@gmail.com",phone:"0123456789",gender:"Nam",birthday:"30/02/2024"},
    ]

    const column3=[
        {field:"name",name:"Tên chi phí",
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"price",name:"Số tiền(VNĐ)"},
        {field:"category",name:"Phân loại"},
        {field:"startDate",name:"Thời gian bắt đầu"},
        {field:"endDate",name:"Thời gian kết thúc"},
        {field:"status",name:"Trạng thái",
            render:(item)=>(
                <EuiBadge><EuiHealth color='success'>{item}</EuiHealth></EuiBadge>
            ),
            width:"120px"
        },
    ]
    const item3=[
        {name:"Học phí",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
        {name:"Bảo hiểm y tế",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
        {name:"Phí ăn trưa",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
        {name:"Phí vé xe bus",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
        {name:"Phí quần áo đồng phục",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
        {name:"Học phí",price:10000000,category:"Bắt buộc",startDate:"30/02/2024",endDate:"30/02/2024",status:"Đã đóng"},
    ]


  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header 
        bottomBorder={false}
        alignItems='center'
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup gutterSize='s'>
                        <EuiFlexItem grow={false}>
                            <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiText><h2>Công nợ</h2></EuiText>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFlexGroup alignItems='center'>
                                <EuiText size='s'><strong>Trường THPT Bách Khoa</strong></EuiText>
                                <EuiText size='s'><span><strong>Hiệu trưởng:&nbsp;</strong>Lê Chí Tuyền</span></EuiText>
                                <EuiText size='s'><span><strong>Tổng số lớp học:&nbsp;</strong>30</span></EuiText>
                                <EuiText size='s'><span><strong>SĐT:&nbsp;</strong>0123456789</span></EuiText>
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
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:'0'}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiFlexGroup>
                <EuiText size='s'><b>Khối 10</b></EuiText>
                <EuiText size='s'><b>Khối 11</b></EuiText>
                <EuiText size='s'><b>Khối 12</b></EuiText>
            </EuiFlexGroup>
            <EuiSpacer size='s'/>
                <EuiBasicTable
                tableLayout='auto'
                    style={{borderBlockStart:'1px solid #D3DAE6'}}
                    columns={column1}
                    items={item1}
                />
            {classId&&<EuiPageSection color='subdued' contentProps={{style:{paddingBlock:'10px'}}}>
                <EuiBasicTable
                tableLayout='auto'
                columns={column2}
                items={item2}/>
               { studentId&&<EuiPageSection color='subdued' contentProps={{style:{paddingBlock:'10px'}}}>
                    <EuiBasicTable
                    tableLayout='auto'
                    columns={column3}
                    items={item3}/>
                </EuiPageSection>}
            </EuiPageSection>}
            <EuiSpacer/>
            <EuiTablePagination
                pageCount={4}
                activePage={0}
                itemsPerPage={10}
                itemsPerPageOptions={[10,25,50]}/>
        </EuiPageTemplate.Section>
        </EuiPageTemplate>
  )
}