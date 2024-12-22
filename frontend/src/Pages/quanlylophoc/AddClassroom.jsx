import { EuiButton, EuiButtonEmpty, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function AddClassroom({setIsModalClassroom}) {

  return (
    <EuiModal onClose={()=>setIsModalClassroom(false)} style={{width:'23rem'}} maxWidth={false}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Tạo mới phòng học</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFormRow label="Phòng học" fullWidth>
                <EuiFieldText placeholder='10' fullWidth/>
            </EuiFormRow>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalClassroom(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
