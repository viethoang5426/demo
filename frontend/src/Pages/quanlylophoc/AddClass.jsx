import { EuiButton, EuiButtonEmpty, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function AddClass({setIsModalClass}) {
    const [isPopoverBlock,setIsPopoverBlock]=useState(false)
          const [options, setOptions] = useState([
            {label: 'Khối',disabled: true,},
            {label: '10',},
            {label: '11',},
            {label: '12',},
        ])
        const selectedBlock=options.filter(option=>option.checked==="on")
  return (
    <EuiModal onClose={()=>setIsModalClass(false)} style={{width:'700px'}} maxWidth={false}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Tạo mới lớp học</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGrid columns={2}>
                <EuiFlexItem>
                    <EuiFormRow label="Tên lớp học" fullWidth>
                        <EuiFieldText placeholder='10A6' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Khối" fullWidth>
                        <EuiPopover
                            panelStyle={{width:'300px'}}
                            className='customPopover'
                            panelPaddingSize='s'
                            hasArrow={false}
                            isOpen={isPopoverBlock}
                            closePopover={()=>setIsPopoverBlock(false)}
                            button={
                            <EuiFormControlLayout isDropdown onClick={()=>setIsPopoverBlock(!isPopoverBlock)} fullWidth>
                                <EuiFieldText placeholder='Hệ đào tạo' value={selectedBlock[0]?.label} fullWidth/>
                            </EuiFormControlLayout>
                            }>
                            <EuiSelectable
                                options={options}
                                singleSelection
                                onChange={(newOptions) => setOptions(newOptions)}>
                                {(list)=>(<>{list}</>)}
                            </EuiSelectable>
                        </EuiPopover>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Giáo viên chủ nhiệm" fullWidth>
                        <EuiSelect
                        options={[
                            {label:"Lê Chí Tuyền"}
                        ]}/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Phòng học cố định" fullWidth>
                        <EuiFieldText placeholder='Sân vận động' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGrid>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalClass(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Tạo mới</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
