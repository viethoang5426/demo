import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiFieldPassword, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect } from '@elastic/eui'
import moment from 'moment'
import React, { useState } from 'react'

export default function AddAcount({setModalAddAccount}) {
    const [birthday,setBirthday]=useState(moment())

  return (
    <EuiModal style={{width:'44rem'}} onClose={()=>setModalAddAccount(false)}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
            <h4>Tạo mới tài khoản- Giáo viên</h4>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGrid columns={2}>
                <EuiFlexItem>
                    <EuiFormRow label="Học và tên người dùng" fullWidth>
                        <EuiFieldText value="Lê Chí Tuyền"  fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem >
                    <EuiFormRow label="Trường học" fullWidth>
                        <EuiSelect options={[
                            {value:"THPT Bách Khoa",label:"THPT Bách Khoa"}
                        ]}fullWidth/>
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
                        <EuiDatePicker selected={birthday} onChange={(date)=>setBirthday(date)} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Giới tính" fullWidth>
                        <EuiSelect options={[
                            {value:"Nam",label:"Nam"},
                            {value:"Nữ",label:"Nữ"},
                        ]} fullWidth/>
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
                <EuiButtonEmpty onClick={()=>setModalAddAccount(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới tài khoản</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
