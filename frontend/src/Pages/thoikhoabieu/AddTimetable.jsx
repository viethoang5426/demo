import { EuiAvatar, EuiBadge, EuiButton,EuiAccordion,EuiPanel,EuiSpacer,euiPaletteColorBlind, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiPageTemplate, EuiSplitPanel, EuiText, EuiTimeline, EuiTimelineItem, EuiTitle, EuiSwitch, useGeneratedHtmlId, EuiFormRow, EuiSelect, EuiComboBox, EuiBasicTable, EuiTable, EuiTableBody, EuiTableRow, EuiTableRowCell, EuiFieldSearch } from '@elastic/eui'
import React, { useState } from 'react'
import MorningSchedule from '../../Components/TimeTable/MorningSchedule';
import AfternoonSchedule from '../../Components/TimeTable/AfternoonSchedule';
import TimeTable from '../../Components/TimeTable/TimeTable';

export default function AddTimeTable() {
    const [options, setOptions] = useState([
        {label: 'Buổi sáng'},
        {label: 'Buổi chiều'},
    ]);
    const [selectedOptions, setSelected] = useState([]);
    const onChange = (selectedOptions) => {
        setSelected(selectedOptions);
      };

  return (
    <EuiPageTemplate style={{background:'white'}}>
      <EuiPageTemplate.Header
      pageTitle={
        <EuiFlexGroup alignItems='center' gutterSize='s'>
            <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
            <EuiText><h2>Thời khóa biểu</h2></EuiText>
        </EuiFlexGroup>
      }/>
      <EuiPageTemplate.Section>
        <EuiTimeline>
            <EuiTimelineItem
            verticalAlign="top"
            icon={
              <EuiAvatar
                name="Checked"
                iconType="check"
                color='#A987D1'
              />
            }>
                <EuiSplitPanel.Outer  hasBorder grow>
                <EuiSplitPanel.Inner grow={false} paddingSize='s' color='subdued'>
                    <EuiTitle size="s">
                        <b>1. Cấu hình chung</b>
                    </EuiTitle>
                </EuiSplitPanel.Inner>
                <EuiHorizontalRule margin="none" />
                <EuiSplitPanel.Inner>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFormRow label={<b>Năm học</b>} fullWidth>
                                <EuiSelect
                                options={[
                                    {value:'2022',text:'2022'},
                                    {value:'2023',text:'2023'},
                                    {value:'2024',text:'2024'},
                                    {value:'2025',text:'2025'},
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow label={<b>Số lượng ngày học</b>} fullWidth>
                                <EuiSelect  options={[
                                    {value:'1',text:'1'},
                                    {value:'2',text:'2'},
                                    {value:'3',text:'3'},
                                    {value:'4',text:'4'},
                                    {value:'5',text:'5'},
                                    {value:'6',text:'6'},
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow label={<b>Buổi học</b>} fullWidth>
                                <EuiComboBox
                                options={options}
                                onChange={onChange}
                                selectedOptions={selectedOptions}
                                isClearable={true} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer/>
                    <EuiFlexGroup justifyContent='spaceBetween'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiButton fill iconType="plusInCircle">Cài đặt khối và lớp học</EuiButton>
                                <EuiButton fill iconType="plusInCircle">Cài đặt môn học</EuiButton>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiButton>Đặt lại</EuiButton>
                                <EuiButton fill iconType="plusInCircle">Lưu</EuiButton>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiSplitPanel.Inner>
                </EuiSplitPanel.Outer>
            </EuiTimelineItem>
            <EuiTimelineItem
                verticalAlign="top"
                icon={
                <EuiAvatar
                    name="Checked"
                    iconType="check"
                    color='#E4A6C7'
                />
            }>
                <EuiSplitPanel.Outer  hasBorder grow>
                    <EuiSplitPanel.Inner grow={false} paddingSize='s' color='subdued'>
                        <EuiTitle size="s">
                            <b>2. Phân công giáo viên</b>
                        </EuiTitle>
                    </EuiSplitPanel.Inner>
                    <EuiHorizontalRule margin="none" />
                    <MorningSchedule/>
                    <AfternoonSchedule/>
                    <EuiSplitPanel.Inner>
                        <EuiFlexGroup justifyContent='flexEnd' >
                            <EuiButton>Đặt lại</EuiButton>
                            <EuiButton fill iconType="plusInCircle">Lưu</EuiButton>
                        </EuiFlexGroup>
                    </EuiSplitPanel.Inner>
                </EuiSplitPanel.Outer>
            </EuiTimelineItem>
            <EuiTimelineItem
                verticalAlign="top"
                icon={
                <EuiAvatar
                    name="Checked"
                    iconType="dot"
                    color='subdued'
                />
            }>
                <EuiSplitPanel.Outer  hasBorder grow>
                    <EuiSplitPanel.Inner grow={false} paddingSize='s' color='subdued'>
                        <EuiTitle size="s">
                            <b>3. Phân công giáo viên</b>
                        </EuiTitle>
                    </EuiSplitPanel.Inner>
                    <EuiHorizontalRule margin="none" />
                    <TimeTable/>
                </EuiSplitPanel.Outer>
            </EuiTimelineItem>
            <EuiTimelineItem
                verticalAlign="top"
                icon={
                <EuiAvatar
                    name="Checked"
                    iconType="dot"
                    color='subdued'
                />
            }>
                <EuiSplitPanel.Outer  hasBorder grow>
                    <EuiSplitPanel.Inner grow={false} paddingSize='s' color='subdued'>
                        <EuiTitle size="s">
                            <b>Xác nhận và lưu</b>
                        </EuiTitle>
                    </EuiSplitPanel.Inner>
                    {/* <EuiHorizontalRule margin="none" /> */}
                    <EuiSplitPanel.Inner>
                        <EuiFlexGroup justifyContent='flexEnd'>
                            <EuiButton fill iconType="plusInCircle">Lưu</EuiButton>
                            <EuiButton fill iconType="plusInCircle">Đặt lại</EuiButton>
                        </EuiFlexGroup>
                    </EuiSplitPanel.Inner>
                </EuiSplitPanel.Outer>
            </EuiTimelineItem>
        </EuiTimeline>
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
