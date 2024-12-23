import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiDatePickerRange, EuiFieldText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiIcon, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPopover, EuiSelectable, EuiSpacer, EuiTextArea } from '@elastic/eui'
import moment from 'moment';
import React, { useState } from 'react'

export default function AddEvent({setIsModal}) {
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment().add(1, 'd'));

    const [isPopoverEvent,setIsPopoverEvent]=useState(false)
          const [optionEvent, setOptionEvent] = useState([
            {label: 'Phân loại sự kiện',},
            {label: 'Tất cả',},
            {label: 'Bắt buộc',},
            {label: 'Không bắt buộc',},
        ])
        const selectedEvent=optionEvent.filter(option=>option.checked==="on")
  return (
    <EuiModal onClose={()=>setIsModal(false)} style={{width:'800px'}}> 
      <EuiModalHeader>
        <EuiModalHeaderTitle><p>Tạo mới sự kiện</p></EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiFlexGroup>
            <EuiFlexItem grow={5}>
                <EuiFormRow label={<b>Tên sự kiện</b>} fullWidth>
                    <EuiFieldText placeholder='Giải bóng rổ khối 10' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={4}>
                <EuiFormRow label={<b>Đơn vị tổ chức</b>} fullWidth>
                    <EuiFieldText placeholder='Phòng thể thao' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem grow={5}>
                <EuiFormRow label={<b>Emai liên lạc</b>} fullWidth>
                    <EuiFieldText placeholder='phongthethao@gmail.com' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={4}>
                <EuiFormRow label={<b>Địa điểm tổ chức</b>} fullWidth>
                    <EuiFieldText placeholder='Sân vận động' fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem grow={5}>
                <EuiFormRow label={<b>Ngày - giờ diễn ra</b>} fullWidth>
                    <EuiDatePickerRange
                    startDateControl={
                    <EuiDatePicker
                    selected={startDate}
                    onChange={(date) =>setStartDate(date)}
                    dateFormat="DD/MM/YYYY HH:mm"
                    showTimeSelect/>
                    }
                    endDateControl={
                    <EuiDatePicker
                    selected={endDate}
                    onChange={(date) =>setEndDate(date)}
                    dateFormat="DD/MM/YYYY HH:mm"
                    showTimeSelect
                    />} fullWidth/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={4}>
                <EuiFormRow label={<b>Phân loại</b>} fullWidth>
                    <EuiPopover
                    className='customPopover'
                    panelStyle={{width:'300px'}}
                    panelPaddingSize='none'
                    hasArrow={false}
                    isOpen={isPopoverEvent}
                    closePopover={()=>setIsPopoverEvent(false)}
                    button={
                        <EuiFormControlLayout onClick={()=>setIsPopoverEvent(!isPopoverEvent)} isDropdown fullWidth>
                            <EuiFieldText placeholder='Phân loại' value={selectedEvent[0]?.label} fullWidth/>
                        </EuiFormControlLayout>
                    }>
                        <EuiSelectable
                            options={optionEvent}
                            singleSelection
                            onChange={(newOptions) => setOptionEvent(newOptions)}>
                            {(list)=>(<>{list}</>)}
                        </EuiSelectable>
                    </EuiPopover>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFlexGroup>
            <EuiFlexItem grow={5}>
                <EuiFormRow label={<b>Mô tả</b>} fullWidth>
                    <EuiTextArea rows={5} placeholder='TextArea'/>
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={4}>
                <EuiFormRow label={<b>Hình ảnh</b>} fullWidth>
                    <EuiFilePicker multiple initialPromptText="Select or drag and drop multiple files"/>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiFlexGroup justifyContent='flexEnd'>
            <EuiButtonEmpty onClick={()=>setIsModal(false)}>Hủy</EuiButtonEmpty>
            <EuiButton fill>Tạo mới</EuiButton>
        </EuiFlexGroup>
      </EuiModalFooter>
    </EuiModal>
  )
}
