import { EuiButton, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHealth, EuiHorizontalRule, EuiIcon, EuiImage, EuiPageTemplate, EuiPanel, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui'
import React from 'react'

export default function ContactBookView() {
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup gutterSize='s' alignItems='center'>
                <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                <EuiText><h2>Sổ liên lạc điện tử</h2></EuiText>
            </EuiFlexGroup>
        }
        rightSideItems={[
            <EuiFlexGroup gutterSize='s'>
                <EuiButton iconType="list" fill>Sổ điểm</EuiButton>
                <EuiButton iconType="user" fill>Học bạ học sinh</EuiButton>
                <EuiButton iconType="indexEdit" fill>Chỉnh sửa</EuiButton>
            </EuiFlexGroup>
        ]}/>
        <EuiHorizontalRule margin='none' style={{width:'calc(100% - 48px)',margin:'auto'}}/>
        <EuiPageTemplate.Section>
            <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                    <EuiPanel style={{width:'300px'}}>
                        <EuiFlexGroup direction='column' alignItems='center'>
                            <EuiSpacer size='s'/>
                            <EuiImage src='./assets/avat.png' width="150" height="150" style={{borderRadius:'50%'}}/>
                            <EuiText><h3>Lê Chí Tuyền</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiHorizontalRule margin='s' style={{border:'1px solid black'}}/>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiText size='s'><b>ID học sinh:</b>&nbsp;20242024</EuiText>
                            <EuiText size='s'><b>Trạng thái học tập:</b>&nbsp;Đang học</EuiText>
                            <EuiText size='s'><b>Điểm trung bình:</b>&nbsp;3.7</EuiText>
                            <EuiText size='s'><b>Học lực:</b>&nbsp;Giỏi</EuiText>
                            <EuiText size='s'><b>Hạnh kiểm:</b>&nbsp;Tốt</EuiText>
                        </EuiFlexGroup>
                        <EuiSpacer size='s'/>
                        <EuiFlexGroup justifyContent='center'>
                            <EuiImage src='./assets/qr.png' size="s"/>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                    </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiPanel>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiTitle size='xs'><p>Thông tin học sinh</p></EuiTitle>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Họ và tên:</b>&nbsp;Lê Chí Tuyền</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Ngày sinh:</b>&nbsp;30/08/2001</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Giới tính:</b>&nbsp;Nam</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Trường:</b>&nbsp;THPT Bách Khoa</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Lớp:</b>&nbsp;12A12</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Trạng thái học tập:</b>&nbsp;<EuiHealth color="success">Đang học</EuiHealth></EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Email:</b>&nbsp;lechituyen@gmail.com</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Số điện thoại:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Địa chỉ:</b>&nbsp;Số 1, Đường Đại Cồ Việt</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiHorizontalRule margin='m'/>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiTitle size='xs'><p>Thông tin cá nhân</p></EuiTitle>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Dân tộc:</b>&nbsp;Kinh</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Tôn giáo:</b>&nbsp;Không</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>CCCD:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiText><b>Hộ khẩu thường trú:</b>&nbsp;Số 1, Đường Đại Cồ Việt</EuiText>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Họ và tên bố:</b>&nbsp;Lê Văn A</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Năm sinh:</b>&nbsp;1980</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Số điện thoại:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Email:</b>&nbsp;Không có</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Nghề nghiệp:</b>&nbsp;Giáo viên</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Nơi công tác:</b>&nbsp;Đại học Bách Khoa Hà Nội</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Họ và tên mẹ:</b>&nbsp;Phạm Thị A</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Năm sinh:</b>&nbsp;1980</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Số điện thoại:</b>&nbsp;0123456789</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Email:</b>&nbsp;Không có</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiText><b>Nghề nghiệp:</b>&nbsp;Giáo viên</EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={3}>
                                    <EuiText><b>Nơi công tác:</b>&nbsp;Đại học Bách Khoa Hà Nội</EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiHorizontalRule/>
                    </EuiPanel>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
