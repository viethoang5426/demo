import { EuiButton, EuiButtonEmpty, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function AddBlock({setIsModalBlock}) {

  return (
    <EuiModal onClose={()=>setIsModalBlock(false)} style={{width:'23rem'}} maxWidth={false}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Tạo mới khối</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFormRow label="Khối" fullWidth>
                <EuiFieldText placeholder='10' fullWidth/>
            </EuiFormRow>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalBlock(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
