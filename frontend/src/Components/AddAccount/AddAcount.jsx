import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiFieldPassword, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect } from '@elastic/eui'
import React from 'react'

export default function AddAcount({setModalAddAccount}) {
  return (
    <EuiModal style={{width:'44rem'}}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
            <h4>Tạo mới tài khoản- Giáo viên</h4>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGrid columns={2}>
                <EuiFlexItem>
                    <EuiFormRow label="Học và tên người dùng" fullWidth>
                        <EuiFieldText value="Lê Chí Tuyền" fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem >
                    <EuiFormRow label="Trường học" fullWidth>
                        <EuiSelect value="THPT Bách Khoa" fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Email" fullWidth>
                        <EuiFieldText value="lechituyen@gmail.com" fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Số điện thoại liên lạc" fullWidth>
                        <EuiFieldText value="0283929393" fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Ngày sinh" fullWidth>
                        <EuiDatePicker fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Giới tính" fullWidth>
                        <EuiSelect fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Mật khẩu" fullWidth>
                        <EuiFieldPassword type='dual' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Nhập lại mật khẩu" fullWidth>
                    <EuiFieldPassword type='dual' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGrid>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới tài khoản</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
