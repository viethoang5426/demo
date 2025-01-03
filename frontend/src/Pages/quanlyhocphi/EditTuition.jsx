import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiDatePickerRange, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect, EuiSpacer } from '@elastic/eui'
import moment from 'moment'
import React, { useState } from 'react'

export default function EditTuition({setIsModalEdit}) {
    const [startDate,setStartDate]=useState(moment())
    const [endDate,setEndDate]=useState(moment())

  return (
    <EuiModal onClose={()=>setIsModalEdit(false)} style={{width:"660px"}}>
        <EuiModalHeader>
            <EuiModalHeaderTitle><p>Thêm mới phí thu</p></EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFormRow fullWidth label={<b>Tên phí thu</b>}>
                        <EuiFieldText placeholder='Học phí' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow fullWidth label={<b>Phân loại</b>}>
                        <EuiSelect options={[
                            {label:"Phân loại"}
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFormRow fullWidth label={<b>Từ ngày-Đến ngày</b>}>
                        <EuiDatePickerRange
                        startDateControl={
                            <EuiDatePicker selected={startDate} onChange={date=>setStartDate(date)}/>
                        }
                        endDateControl={
                            <EuiDatePicker selected={endDate} onChange={date=>setEndDate(date)}/>
                        } fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow fullWidth label={<b>Số tiền</b>}>
                        <EuiFieldText placeholder='10.000.000' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFormRow fullWidth label={<b>Phạm vi</b>}>
                        <EuiSelect options={[
                            {label:"Toàn trường"}
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setIsModalEdit(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill>Xác nhận</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
