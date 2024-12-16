import { EuiButton, EuiButtonIcon, EuiConfirmModal, EuiDatePicker, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiIcon, EuiImage, EuiPageTemplate, EuiPanel, EuiSelect, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui'
import React, { useState } from 'react'

export default function ContactBookEdit() {
    const [modalConfirm,setModalConfirm]=useState(false)

    let confirm;
    if(modalConfirm){
        confirm=(
            <EuiConfirmModal
            title="Xác nhận thay đổi"
            onCancel={()=>setModalConfirm(false)}
            onConfirm={()=>setModalConfirm(false)}
            cancelButtonText="Hủy"
            confirmButtonText="Xác nhận">
                <EuiText size='s'>Bạn đã thay đổi các thay đổi: Ngày sinh, Số điện thoại của phụ huynh.</EuiText>
            </EuiConfirmModal>
        )
    }
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup gutterSize='s' alignItems='center'>
                <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                <EuiText><h2>Sổ liên lạc điện tử</h2></EuiText>
            </EuiFlexGroup>
        }/>
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
                            <EuiText><h3>Thông tin học sinh</h3></EuiText>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Họ</strong>}>
                                        <EuiFieldText placeholder='Lê'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Tên đệm và tên</strong>}>
                                        <EuiFieldText placeholder='Chí Tuyền'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Giới tính</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"",label:"Giới tính"},
                                            {value:"Nam",label:"Nam"},
                                            {value:"Nữ",label:"Nữ"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Email</strong>}>
                                        <EuiFieldText placeholder='lechituyen@gmail.com'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Số điện thoại</strong>}>
                                        <EuiFieldText placeholder='0123456789'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Ngày sinh</strong>}>
                                        <EuiDatePicker/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Đại chỉ thường trú</strong>}>
                                        <EuiFieldText placeholder='Số 1, Đường Đại Cồ Việt'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Trường</strong>}>
                                        <EuiFieldText placeholder='THPT Bách Khoa Hà Nội'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Lớp</strong>}>
                                        <EuiFieldText placeholder='12A12'/>                               
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiText><h3>Thông tin cá nhân</h3></EuiText>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Họ và tên mẹ</strong>}>
                                        <EuiFieldText placeholder='Phạm Thị A'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Đơn vị công tác</strong>}>
                                        <EuiFieldText placeholder='Đại Học Bách Khoa Hà Nội'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Số điện thoại</strong>}>
                                        <EuiFieldText placeholder='0123456789'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Họ và tên bố</strong>}>
                                        <EuiFieldText placeholder='Lê Văn A'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Đơn vị công tác</strong>}>
                                        <EuiFieldText placeholder='Đại Học Bách Khoa Hà Nội'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Số điện thoại</strong>}>
                                        <EuiFieldText placeholder='0123456789'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Khi cần liên hệ với</strong>}>
                                        <EuiFieldText placeholder='Lê Văn A'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label={<strong>Quan hệ</strong>}>
                                        <EuiFieldText placeholder='Bố'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label={<strong>Số điện thoại</strong>}>
                                        <EuiFieldText placeholder='0123456789'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup justifyContent='flexEnd'>
                                <EuiButton iconType="plusInCircle">Đặt lại</EuiButton>
                                <EuiButton iconType="save" onClick={()=>setModalConfirm(true)} fill>Lưu</EuiButton>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
        {confirm}
    </EuiPageTemplate>
  )
}
