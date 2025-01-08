import { EuiButton, EuiButtonEmpty, EuiComboBox, EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect, EuiSpacer, EuiText } from '@elastic/eui'
import React, { Dispatch, SetStateAction, useState } from 'react'

export default function AddSchool({setIsModal}:{setIsModal:Dispatch<SetStateAction<boolean>>}) {

  return (
    <EuiModal style={{width:'1000px'}} maxWidth={false} onClose={()=>setIsModal(false)}>
      <EuiModalHeader>
        <EuiModalHeaderTitle><p>Tạo mới trường học</p></EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<b>Tên trường học</b>} fullWidth>
                    <EuiFieldText placeholder='THPT Bách Khoa' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Tỉnh/ Thành phố</b>} fullWidth>
                    <EuiSelect
                    options={[
                        {text:"Thái Bình"}
                    ]} fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Quận/ Huyện</b>} fullWidth>
                    <EuiSelect
                    options={[
                        {text:"Thái Bình"}
                    ]} fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<b>Địa chỉ</b>} fullWidth>
                    <EuiFieldText placeholder='Số 1, Đường Đại Cồ Việt, Phường Bách Khoa' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Tỉnh/ Thành phố</b>} fullWidth>
                    <EuiComboBox
                        selectedOptions={[
                            {value:"THCS",label:"THCS"},
                            {value:"THPT",label:"THPT"},
                        ]}
                        options={[
                            {value:"THCS",label:"THCS"},
                            {value:"THPT",label:"THPT"},
                        ]} fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Email</b>} fullWidth>
                    <EuiFieldText placeholder='thptbachkhoa@gmail.com' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<b>Số điện thoại</b>} fullWidth>
                    <EuiFieldText placeholder='0123456789' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Mật khẩu</b>} fullWidth>
                    <EuiFieldPassword type='dual' value='matkhau'/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<b>Nhập lại mật khẩu</b>} fullWidth>
                    <EuiFieldPassword type='dual' value='matkhau'/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiFlexGroup justifyContent='flexEnd'>
            <EuiButtonEmpty onClick={()=>setIsModal(false)}>Hủy</EuiButtonEmpty>
            <EuiButton fill>Xác nhận</EuiButton>
        </EuiFlexGroup>
      </EuiModalFooter>
    </EuiModal>
  )
}
