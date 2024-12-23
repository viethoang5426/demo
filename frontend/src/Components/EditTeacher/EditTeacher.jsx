import { EuiButton,EuiModalBody,EuiModalHeaderTitle,EuiModalHeader,EuiModal, EuiButtonIcon, EuiConfirmModal, EuiDatePicker, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiIcon, EuiImage, EuiPageTemplate, EuiPanel, EuiSelect, EuiSpacer, EuiText, EuiTitle, EuiOverlayMask, EuiLink, EuiButtonEmpty } from '@elastic/eui'
import React from 'react'

export default function EditTeacher({setIsModal}) {
  return (
    <EuiModal style={{width:'100vw',height:'100vh',maxHeight:'none'}} className='customModal' maxWidth={false} onClose={()=>setIsModal(false)}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Lê Chí Tuyền:&nbsp;Chỉnh sửa</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGroup>
                <EuiFlexItem grow={1}>
                    <EuiPanel>
                        <EuiFlexGroup justifyContent='center'>
                            <EuiImage 
                            size="m"
                            hasShadow
                            src='./assets/img.png'
                            caption={
                                <p>Chọn ảnh hồ sơ</p>
                            }/>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiFormRow label={<strong>Họ và tên</strong>}>
                                <EuiFieldText placeholder='Lê Chí Tuyền'/>
                            </EuiFormRow>
                            <EuiFormRow label={<strong>ID giáo viên</strong>}>
                                <EuiFieldText placeholder='20242024'/>
                            </EuiFormRow>
                            <EuiButton iconType="editorCodeBlock" fill>Tạo mã QR</EuiButton>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem grow={3}>
                    <EuiPanel>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiText><h3>Thông tin cá nhân</h3></EuiText>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={4}>
                                    <EuiFormRow fullWidth label={<strong>Giới tính</strong>}>
                                        <EuiFieldText placeholder='Nam' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Ngày sinh</strong>}>
                                        <EuiFieldText placeholder='20242024' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Số điện thoại</strong>}>
                                        <EuiFieldText placeholder='0123456789' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={4}>
                                    <EuiFormRow fullWidth label={<strong>Email</strong>}>
                                        <EuiFieldText placeholder='lechituyen@gmail.com' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Người thân</strong>}>
                                        <EuiFieldText placeholder='Lê Chí Tuyền' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Số điện thoại người thân</strong>}>
                                        <EuiFieldText placeholder='0123456789' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiText><h3>Thông tin công việc/ học tập</h3></EuiText>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={4}>
                                    <EuiFormRow fullWidth label={<strong>Chức danh</strong>}>
                                        <EuiFieldText placeholder='Thạc sĩ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Phòng ban</strong>}>
                                        <EuiFieldText placeholder='Giáo vụ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={5}>
                                    <EuiFormRow fullWidth label={<strong>Thâm niên</strong>}>
                                        <EuiFieldText placeholder='10 năm' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                            <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                                <EuiText><h3>Giải thưởng & Thành tích</h3></EuiText>
                                <EuiLink><EuiIcon type="plusInCircle"/>&nbsp;Tạo mới</EuiLink>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow fullWidth label={<strong>Tên giải thưởng, thành tích</strong>}>
                                        <EuiFieldText placeholder='Giáo viên xuất sắc cấp Tỉnh' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow fullWidth label={<strong>Năm học</strong>}>
                                        <EuiSelect
                                        options={[
                                            {label:'2024'}
                                        ]} fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                    </EuiPanel>
                    <EuiSpacer/>
                    <EuiFlexGroup justifyContent='flexEnd'>
                        <EuiButtonEmpty iconType="plusInCircle" onClick={()=>setIsModal(false)}>Hủy</EuiButtonEmpty>
                        <EuiButton iconType="save" fill>Xác nhận</EuiButton>
                    </EuiFlexGroup>
                </EuiFlexItem>
        </EuiFlexGroup>
        </EuiModalBody>
    </EuiModal>
  )
}
