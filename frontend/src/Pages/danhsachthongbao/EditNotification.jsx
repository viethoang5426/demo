import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiFieldText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelectable, EuiSpacer, EuiText, EuiTextArea } from '@elastic/eui'
import moment from 'moment'
import React, { useState } from 'react'

export default function EditNotification({setIsModalEdit}) {
    const [isPopoverNotification,setIsPopoverNotification]=useState(false)
    const [optionNotification, setOptionNotification] = useState([
        {label: 'Học tập',},
        {label: 'Sự kiện',},
        {label: "Nội quy",},
        {label: 'Cuộc họp',},
    ])
    const selectedNotification=optionNotification.filter(option=>option.checked==="on")

    const [isPopoverRole,setIsPopoverRole]=useState(false)
    const [optionRole, setOptionRole] = useState([
        {label: 'Tất cả',},
        {label: 'Giáo viên',},
        {label: "Phụ huynh",},
        {label: 'Học sinh',},
    ])
    const selectedRole=optionRole.filter(option=>option.checked==="on")

    const [date,setDate]=useState(moment())
  return (
    <EuiModal onClose={()=>setIsModalEdit(false)} style={{width:'700px'}}>
      <EuiModalHeader>
        <EuiModalHeaderTitle><p>Chỉnh sửa thông báo</p></EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Tên thông báo</b></EuiText>} fullWidth>
                    <EuiFieldText placeholder='Thông báo thu học phí' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Phân loại</b></EuiText>} fullWidth>
                    <EuiPopover
                        className='customPopover'
                        panelStyle={{width:'300px'}}
                        panelPaddingSize='none'
                        hasArrow={false}
                        isOpen={isPopoverNotification}
                        closePopover={()=>setIsPopoverNotification(false)}
                        button={
                            <EuiFormControlLayout onClick={()=>setIsPopoverNotification(!isPopoverNotification)} isDropdown fullWidth>
                                <EuiFieldText placeholder='Phân loại' value={selectedNotification[0]?.label} fullWidth/>
                            </EuiFormControlLayout>
                        }>
                            <EuiSelectable
                                options={optionNotification}
                                singleSelection
                                onChange={(newOptions) => setOptionNotification(newOptions)}>
                                {(list)=>(<>{list}</>)}
                            </EuiSelectable>
                        </EuiPopover>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Thời gian thông báo</b></EuiText>} fullWidth>
                    <EuiDatePicker
                    selected={date}
                    onChange={(date)=>setDate(date)}
                    showTimeSelect
                    dateFormat="DD/MM/YYYY HH:mm"
                    fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Người nhận thông báo</b></EuiText>} fullWidth>
                    <EuiPopover
                        className='customPopover'
                        panelStyle={{width:'300px'}}
                        panelPaddingSize='s'
                        hasArrow={false}
                        isOpen={isPopoverRole}
                        closePopover={()=>setIsPopoverRole(false)}
                        button={
                            <EuiFormControlLayout onClick={()=>setIsPopoverRole(!isPopoverRole)} isDropdown fullWidth>
                                <EuiFieldText placeholder='Phân loại' value={selectedRole[0]?.label} fullWidth/>
                            </EuiFormControlLayout>
                        }>
                            <EuiSelectable
                                options={optionRole}
                                singleSelection
                                searchable
                                searchProps={{placeholder:"Tìm kiếm theo phân quyền"}}
                                onChange={(newOptions) => setOptionRole(newOptions)}>
                                {(list,search)=>(<>{search}{list}</>)}
                            </EuiSelectable>
                        </EuiPopover>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Nội dung chi tiết thông báo</b></EuiText>} fullWidth>
                    <EuiTextArea placeholder='TextArea' rows={5}/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label={<EuiText><b>Tải ảnh lên hoặc tệp</b></EuiText>} fullWidth>
                    <EuiFilePicker
                    initialPromptText="Tải ảnh lên hoặc tệp"
                    fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiFlexGroup justifyContent='flexEnd'>
            <EuiButtonEmpty onClick={()=>setIsModalEdit(false)}>Hủy</EuiButtonEmpty>
            <EuiButton fill>Thêm mới</EuiButton>
        </EuiFlexGroup>
       </EuiModalFooter>
    </EuiModal>
  )
}
