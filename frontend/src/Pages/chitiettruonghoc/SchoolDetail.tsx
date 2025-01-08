import React, { useState } from 'react'
import { EuiPageTemplate,EuiFlexGroup,EuiButtonIcon,EuiText,EuiButton,EuiFlexItem, EuiHorizontalRule, EuiPanel, EuiImage, EuiSpacer, EuiFlexGrid, EuiIcon, EuiDescriptionList } from '@elastic/eui'
import EditSchool from '../../Components/EditSchool/EditSchool'

export default function SchoolDetail() {
    const [editModal,setEditModal]=useState(false)
  return (
    <EuiPageTemplate style={{background:'white'}}>
    <EuiPageTemplate.Header
    bottomBorder={false}
        pageTitle={
                <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                    <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                    <EuiText><h3>Trường THPT Bách Khoa</h3></EuiText>
                </EuiFlexGroup>
        }
        rightSideItems={[
            <EuiFlexGroup gutterSize='s'>
                <EuiButton iconType="list" fill>Danh sách giáo viên</EuiButton>
                <EuiButton iconType="indexEdit" fill onClick={()=>setEditModal(true)}>Chỉnh sửa</EuiButton>
            </EuiFlexGroup>
        ]}/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section >
            <EuiFlexGroup>
                <EuiFlexItem grow={1}>
                    <EuiPanel>
                        <EuiFlexGroup direction='column' alignItems='center'>
                                <EuiSpacer size='s'/>
                                <EuiImage src='./assets/logoSchool.png' width="100" height="150" alt=''/>
                                <EuiText><h3>THPT Bách Khoa</h3></EuiText>
                            </EuiFlexGroup>
                            <EuiHorizontalRule margin='s' style={{border:'1px solid black'}}/>
                            <EuiFlexGroup direction='column' gutterSize='m'>
                                <EuiText size='s'><b>Địa chỉ:</b>&nbsp;Số 1, Đường Đại Cồ Việt, phường Bách Khoa, Hà Nội</EuiText>
                                <EuiText size='s'><b>Số học sinh:</b>&nbsp;1000</EuiText>
                                <EuiText size='s'><b>SĐT:</b>&nbsp;0123456789</EuiText>
                                <EuiText size='s'><b>Email:</b>&nbsp;bachkhoa@gmail.com</EuiText>
                                <EuiText size='s'><b>Hệ đào tạo:</b>&nbsp;THPT, THCS</EuiText>
                            </EuiFlexGroup>
                            <EuiSpacer size='m'/>
                            <EuiFlexGroup justifyContent='center'>
                                <EuiImage src='./assets/qr.png' size="s" alt=''/>
                            </EuiFlexGroup>
                        <EuiSpacer/>
                    </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem grow={3}>
                    <EuiPanel>
                        <EuiText textAlign='center'>Một tình yêu- một tương lai</EuiText>
                        <EuiHorizontalRule/>
                        <EuiFlexGrid columns={4}>
                            {[1,2,3,4].map(item=>(<EuiFlexItem>
                                <EuiImage 
                                    src='/assets/profile.jpg' 
                                    alt=''
                                    hasShadow
                                    caption={
                                        <p>
                                            <EuiText textAlign='center' size='s'>Phạm Thị A</EuiText>
                                            <EuiText textAlign='center' size='s'><strong>Hiệu trưởng</strong></EuiText>
                                        </p>
                                    }
                                    width="200" height="200"/>
                            </EuiFlexItem>))}
                        </EuiFlexGrid>
                        <EuiSpacer size='m'/>
                        <EuiFlexGroup gutterSize='s'>
                            <EuiIcon type="starEmpty" size='l'/>
                            <EuiText><strong>Danh hiệu/ Thành tích</strong></EuiText>
                        </EuiFlexGroup>
                        <EuiFlexGroup gutterSize='s'>
                            <EuiFlexItem>
                                <EuiDescriptionList
                                listItems={[
                                    {
                                        title:"Trường đạt chuẩn quốc gia",
                                        description:"2004-2005"
                                    },
                                    {
                                        title:"Huân chương Lao động hạng nhất",
                                        description:"2005-2006"
                                    },
                                    {
                                        title:"Nhận cờ thi đua dẫn đầu khối THPT của Thành phố HN",
                                        description:"2005-2006"
                                    },
                                ]}/>
                            </EuiFlexItem>
                            <EuiFlexItem>
                            <EuiDescriptionList
                                listItems={[
                                    {
                                        title:"Trường đạt chuẩn quốc gia",
                                        description:"2004-2005"
                                    },
                                    {
                                        title:"Huân chương Lao động hạng nhất",
                                        description:"2005-2006"
                                    },
                                    {
                                        title:"Nhận cờ thi đua dẫn đầu khối THPT của Thành phố HN",
                                        description:"2005-2006"
                                    },
                                ]}/>
                            </EuiFlexItem>
                            <EuiFlexItem>
                            <EuiDescriptionList
                                listItems={[
                                    {
                                        title:"Trường đạt chuẩn quốc gia",
                                        description:"2004-2005"
                                    },
                                    {
                                        title:"Huân chương Lao động hạng nhất",
                                        description:"2005-2006"
                                    },
                                    {
                                        title:"Nhận cờ thi đua dẫn đầu khối THPT của Thành phố HN",
                                        description:"2005-2006"
                                    },
                                ]}/>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
        {editModal&&<EditSchool setEditModal={setEditModal}/>}
    </EuiPageTemplate>
  )
}
