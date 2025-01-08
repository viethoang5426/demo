import { EuiButton, EuiButtonEmpty,EuiText, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSpacer, EuiComboBox, EuiHorizontalRule, EuiFilePicker, EuiSelect, EuiLink, EuiIcon, EuiTextArea } from '@elastic/eui'
import React, { Dispatch, SetStateAction } from 'react'

export default function EditSchool({setEditModal}:{setEditModal:Dispatch<SetStateAction<boolean>>}) {
  return (
    <EuiModal onClose={()=>setEditModal(false)} style={{minWidth:'1000px'}}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Trường THPT Bách Khoa: Chỉnh sửa</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFormRow label={<EuiText><strong>Tên trường học</strong></EuiText>}>
                        <EuiFieldText placeholder='THPT Bách Khoa'/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label={<EuiText><strong>Tỉnh/ Thành</strong></EuiText>}>
                        <EuiFieldText placeholder='Thái Bình'/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                <EuiFormRow label={<EuiText><strong>Quận/ Huyện</strong></EuiText>}>
                        <EuiFieldText placeholder='Thái Bình'/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFormRow label={<EuiText><strong>Địa chỉ</strong></EuiText>}>
                        <EuiFieldText placeholder='Số 1, Đường Đại Cồ Việt, Phường Bách Khoa'/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label={<EuiText><strong>Hệ đào tạo</strong></EuiText>}>
                        <EuiComboBox
                        selectedOptions={[
                            {value:"THCS",label:"THCS"},
                            {value:"THPT",label:"THPT"},
                        ]}
                        options={[
                            {value:"THCS",label:"THCS"},
                            {value:"THPT",label:"THPT"},
                        ]}/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                <EuiFormRow label={<EuiText><strong>Email</strong></EuiText>}>
                        <EuiFieldText placeholder='thptbachkhoa@gmail.com'/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiHorizontalRule/>
            <EuiFlexGroup gutterSize='none'>
                <EuiFlexItem grow={1}>
                    <EuiFormRow label={<strong>Logo</strong>} fullWidth>
                        <EuiFilePicker initialPromptText='Thêm ảnh logo của trường' fullWidth className="custom-file-picker"/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={2}>
                    <EuiFlexGroup direction='column' gutterSize='none'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
                                <EuiText><b>Ban giám hiệu</b></EuiText>
                                <EuiLink><EuiIcon type="plusInCircleFilled"/>&nbsp;Thêm</EuiLink>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem style={{paddingInlineStart:'24px'}}>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>} fullWidth>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh" fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>}>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh"/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>}>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh"/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiFlexGroup gutterSize='none'>
                <EuiFlexItem grow={1}>
                    <EuiFormRow label={<strong>Mô tả</strong>} fullWidth>
                        <EuiTextArea placeholder='TextArea' rows={8}/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={2}>
                    <EuiFlexGroup direction='column' gutterSize='none'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
                                <EuiText><b>Giải thưởng</b></EuiText>
                                <EuiLink><EuiIcon type="plusInCircleFilled"/>&nbsp;Thêm</EuiLink>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem style={{paddingInlineStart:'24px'}}>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>}>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh"/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>}>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh"/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiFlexGroup>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Họ và tên</strong>}>
                                        <EuiFieldText placeholder='Nhập họ và tên'/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Chức vụ</strong>}>
                                        <EuiSelect
                                        options={[
                                            {value:"Hiệu trưởng",text:"Hiệu trưởng"},
                                            {value:"Phó hiệu trưởng",text:"Phó hiệu trưởng"},
                                        ]}/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiFormRow label={<strong>Ảnh</strong>}>
                                        <EuiFilePicker display='default' initialPromptText="Chọn file ảnh"/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setEditModal(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Xác nhận</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
