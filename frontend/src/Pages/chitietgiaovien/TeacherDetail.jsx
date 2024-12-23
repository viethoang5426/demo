import React, { useState } from 'react'
import {EuiButton, EuiButtonIcon, EuiFlexGroup, EuiHorizontalRule,EuiSpacer,EuiHealth,EuiImage,EuiPanel,EuiTitle,EuiFlexItem, EuiPageTemplate, EuiText, EuiBasicTable, EuiPagination, EuiTablePagination} from '@elastic/eui'
import EditTeacher from '../../Components/EditTeacher/EditTeacher'

export default function TeacherDetail() {
    const [isModal,setIsModal]=useState(false)

    const columns=[
        {field:"name",name:"Tên giải thưởng/ Thành tích"},
        {field:"year",name:"Năm học"},
    ]
    const items=[
        {name:"Giáo viên xuất sắc cấp tỉnh",year:2024},
        {name:"Giáo viên xuất sắc cấp tỉnh",year:2024},
        {name:"Giáo viên xuất sắc cấp tỉnh",year:2024},
        {name:"Giáo viên xuất sắc cấp tỉnh",year:2024},
        {name:"Giáo viên xuất sắc cấp tỉnh",year:2024},
    ]

    const [activePage, setActivePage] = useState(0);
    const [rowSize, setRowSize] = useState(10);
    const [pageCount, setPageCount] = useState(Math.ceil(items.length / 10));

    const goToPage = (pageNumber) => setActivePage(pageNumber);
    const changeItemsPerPage = (pageSize) => {
        setPageCount(Math.ceil(items.length / pageSize));
        setRowSize(pageSize);
        setActivePage(0);
      };
    const itemOfpages=items.slice(activePage*rowSize,(activePage+1)*rowSize)


  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
            pageTitle={
                <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                    <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                    <EuiText><h1>Lê Chí Tuyền</h1></EuiText>
                </EuiFlexGroup>
            }
            rightSideItems={[
                <EuiButton iconType="indexEdit" fill onClick={()=>setIsModal(true)}>Chỉnh sửa</EuiButton>
            ]}/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiFlexGroup>
                <EuiFlexItem grow={1}>
                    <EuiPanel>
                        <EuiFlexGroup direction='column' alignItems='center'>
                            <EuiSpacer size='s'/>
                            <EuiImage src='./assets/avat.png' width="150" height="150" style={{borderRadius:'50%'}}/>
                            <EuiText><h3>Lê Chí Tuyền</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiHorizontalRule margin='s' style={{border:'1px solid black'}}/>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiText size='s'><b>ID giáo viên:</b>&nbsp;20242024</EuiText>
                            <EuiText size='s'><b>Chức vụ:</b>&nbsp;AAAAAAAAAAA</EuiText>
                            <EuiText size='s'><b>Bộ môn:</b>&nbsp;Toán học</EuiText>
                        </EuiFlexGroup>
                        <EuiSpacer size='s'/>
                        <EuiFlexGroup justifyContent='center'>
                            <EuiImage src='./assets/qr.png' size="s"/>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                    </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem grow={3}>
                    <EuiPanel>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiTitle size='xs'><p>Thông tin cá nhân</p></EuiTitle>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Giới tính:</b>&nbsp;Nam</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Ngày sinh:</b>&nbsp;30/08/2001</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>SĐT:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Email:</b>&nbsp;lechituyen@gmail.com</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Người thân:</b>&nbsp;Lê Chí Tuyền</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>SĐT người thân:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiHorizontalRule margin='m'/>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiTitle size='xs'><p>Thông tin công việc/học tập</p></EuiTitle>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Chức danh:</b>&nbsp;Thạc sĩ</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Phòng ban:</b>&nbsp;Giáo vụ</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Thâm niên:</b>&nbsp;10 năm</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiHorizontalRule margin='m'/>
                        <EuiFlexGroup direction='column' gutterSize='none'>
                            <EuiTitle size='xs'><p>Thành tích</p></EuiTitle>
                            <EuiSpacer size='m'/>
                            <EuiTablePagination
                                pageCount={pageCount}
                                activePage={activePage}
                                onChangePage={goToPage}
                                itemsPerPage={rowSize}
                                onChangeItemsPerPage={changeItemsPerPage}
                                itemsPerPageOptions={[10, 5, 0]}
                            />
                            <EuiBasicTable
                            columns={columns}
                            items={itemOfpages}/>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
        {isModal&&<EditTeacher setIsModal={setIsModal}/>}
    </EuiPageTemplate>
  )
}
