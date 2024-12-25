import React from 'react'
import { Comparators, EuiAccordion, EuiAvatar, EuiBasicTable, EuiButtonIcon, EuiComboBox, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiLink, EuiSelect, EuiSpacer, EuiSplitPanel, EuiText, EuiTitle } from '@elastic/eui'


export default function TimeTable() {
    const columns=[
        {field:'rank',name:"Thứ"},
        {field:'period',name:"Tiết"},
        {field:'10A1',name:"10A1-Tuyền"},
        {field:'10A2',name:"10A2-Tuyền"},
        {field:'10A3',name:"10A3-Tuyền"},
        {field:'10A4',name:"10A4-Tuyền"},
        {field:'10A5',name:"10A5-Tuyền"},
        {field:'10A6',name:"10A6-Tuyền"},
      ]
      const items=[
        {rank:2,period:1,"10A1":"Chào cờ","10A2":"Chào cờ","10A3":"Chào cờ","10A4":"Chào cờ","10A5":"Chào cờ","10A6":"Chào cờ"},
        {rank:2,period:2,"10A1":"Toán học-Tuyền","10A2":"Toán học-Tuyền","10A3":"Toán học-Tuyền","10A4":"Toán học-Tuyền","10A5":"Toán học-Tuyền","10A6":"Toán học-Tuyền"},
        {rank:2,period:3,"10A1":"Toán học-Tuyền","10A2":"Toán học-Tuyền","10A3":"Toán học-Tuyền","10A4":"Toán học-Tuyền","10A5":"Toán học-Tuyền","10A6":"Toán học-Tuyền"},
        {rank:2,period:4,"10A1":"Toán học-Tuyền","10A2":"Toán học-Tuyền","10A3":"Toán học-Tuyền","10A4":"Toán học-Tuyền","10A5":"Toán học-Tuyền","10A6":"Toán học-Tuyền"},
        {rank:2,period:5,"10A1":"Toán học-Tuyền","10A2":"Toán học-Tuyền","10A3":"Toán học-Tuyền","10A4":"Toán học-Tuyền","10A5":"Toán học-Tuyền","10A6":"Toán học-Tuyền"},
      ]
  return (
    <EuiSplitPanel.Inner grow={false}>
        <EuiAccordion id='1'
        buttonContent={<EuiText size='s'><b>Sắp xếp lớp buổi sáng</b></EuiText>}
        arrowDisplay="right"
        initialIsOpen={true}>
            <EuiSpacer/>
            <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                    <EuiFormRow fullWidth>
                        <EuiFieldSearch placeholder='Tìm kiếm theo tên giáo viên' fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={1}>
                    <EuiFormRow fullWidth>
                        <EuiSelect  options={[
                            {value:'',text:'Chức vụ'},
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={1}>
                    <EuiFormRow fullWidth>
                        <EuiSelect options={[
                            {value:'',text:'Toán học'},
                        ]} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiBasicTable
            tableLayout='auto'
            items={items}
            columns={columns}/>
        </EuiAccordion>
    </EuiSplitPanel.Inner>
  )
}
