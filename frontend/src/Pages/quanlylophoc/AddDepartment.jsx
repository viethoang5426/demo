import { EuiButton, EuiButtonEmpty, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function AddDepartment({setIsModalDepartment}) {

  return (
    <EuiModal onClose={()=>setIsModalDepartment(false)} style={{width:'23rem'}} maxWidth={false}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Tạo mới phòng/ban</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFormRow label="Phòng/Ban" fullWidth>
                <EuiFieldText placeholder='Ban giám hiệu' fullWidth/>
            </EuiFormRow>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalDepartment(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
