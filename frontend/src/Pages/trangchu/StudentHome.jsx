import React, { useState } from 'react'
import { EuiBasicTable, EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiIcon, EuiImage, EuiLink, EuiPage, EuiPageTemplate, EuiPanel, EuiSpacer, EuiStat, EuiText, EuiTextColor, EuiTitle } from "@elastic/eui"
import Chart from 'react-apexcharts';

export default function StudentHome() {
  const columns = [
    { field: "TietHoc", name: "Tiết học" },
    { field: "Thu2", name: "Thứ hai" },
    { field: "Thu3", name: "Thứ ba" },
    { field: "Thu4", name: "Thứ tư" },
    { field: "Thu5", name: "Thứ năm" },
    { field: "Thu6", name: "Thứ sáu" },
    { field: "Thu7", name: "Thứ bảy" },
  ];

  const items = [
    { 'TietHoc': 1, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 2, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 3, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 4, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 5, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 6, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 7, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 8, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 9, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 10, 'Thu2': 'Toán', 'Thu3': 'Lý', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 11, 'Thu2': 'Lý', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
    { 'TietHoc': 12, 'Thu2': 'Văn', 'Thu3': 'Toán', "Thu4": 'Hóa', "Thu5": 'Văn', 'Thu6': 'Anh', 'Thu7': 'Sử' },
  ];

  const column1 = [
        {
          field: 'name',
          name: 'Tên sự kiện/hoạt động',
          render: (name) => (
            <EuiLink href="#">
              {name}
            </EuiLink>
          ),
        },
        {
          field: 'organization',
          name: 'Đơn vị tổ chức',
        },
        {
          field: 'email',
          name: 'Email',
        },
        {
          field: 'date',
          name: 'Thời gian diễn ra',
        },
      ];
      
      const item1 = [
        {
          name: 'Giải bóng đá khối 10',
          organization: 'Phòng thể thao',
          email: 'backhoa@gmail.com',
          date: '6:50 30/02/2024 - 16:50 30/02/2024',
        },
        {
          name: 'Giải bóng đá khối 11',
          organization: 'Phòng thể thao',
          email: 'backhoa@gmail.com',
          date: '6:50 30/02/2024 - 16:50 30/02/2024',
        },
        {
          name: 'Giải bóng đá khối 12',
          organization: 'Tuyền Chí Lê',
          email: 'backhoa@gmail.com',
          date: '6:50 30/02/2024 - 16:50 30/02/2024',
        },
        {
          name: 'Hội thi văn nghệ 20/10',
          organization: 'Ngọc Chí Lê',
          email: 'backhoa@gmail.com',
          date: '6:50 30/02/2024 - 16:50 30/02/2024',
        },
      ];


  return (
    <>
        <EuiPageTemplate.Header
        pageTitle="Trang chủ"/>
        <EuiPageTemplate.Section>
            <EuiFlexGroup justifyContent='spaceBetween'>
                <EuiFlexGroup gutterSize='s' alignItems='center'>
                    <EuiIcon type="calendar" color='#1A6ECB'/>
                    <EuiText color='#1A6ECB' style={{paddingBlock:"5px"}}><h3>Thời khóa biểu</h3></EuiText>
                </EuiFlexGroup>
                <EuiFlexItem grow={false}>
                    <EuiFlexGroup>
                        <EuiButtonEmpty>Học kỳ: I</EuiButtonEmpty>
                        <EuiButtonEmpty>Năm học: 2024-2025</EuiButtonEmpty>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiHorizontalRule margin='none' style={{marginInline:"0"}}/>
            <EuiBasicTable
            tableLayout='auto'
            items={items}
            columns={columns}
            />
            <EuiSpacer/>
            <EuiFlexGroup>
              <EuiFlexItem grow={5}>
                <EuiPanel>
                  <EuiFlexGroup gutterSize='s' alignItems='center'>
                      <EuiIcon type="bell" size='l'/>
                      <EuiText color="#1A6ECB"><h3>Sự kiện</h3></EuiText>
                  </EuiFlexGroup>
                  <EuiSpacer/>
                  <EuiBasicTable
                  tableLayout='auto'
                  items={item1}
                  columns={column1}
                  />
                </EuiPanel>
              </EuiFlexItem>
              <EuiFlexItem grow={2}>
                <EuiPanel>
                  <EuiFlexGroup gutterSize='s' alignItems='center'>
                      <EuiIcon type="training" size='l'/>
                      <EuiText color="#1A6ECB"><h3>Kết quả học tập</h3></EuiText>
                  </EuiFlexGroup>
                  <EuiSpacer/>
                  <EuiStat title="3.0/4.0" description="Điểm trung bình năm học"/>
                  <EuiSpacer/>
                  <EuiStat title="2.9/4.0" description="Điểm trung bình"/>
                </EuiPanel>
              </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </>
  )
}
