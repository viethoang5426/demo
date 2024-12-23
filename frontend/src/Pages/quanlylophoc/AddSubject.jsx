import { EuiButton, EuiButtonEmpty, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function AddSubject({setIsModalSubject}) {

  return (
    <EuiModal onClose={()=>setIsModalSubject(false)} style={{width:'23rem'}} maxWidth={false}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Tạo mới môn học</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFormRow label="Môn học" fullWidth>
                <EuiFieldText placeholder='Hóa học' fullWidth/>
            </EuiFormRow>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalSubject(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
