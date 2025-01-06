import React, { useState } from 'react'
import { EuiBasicTable, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiIcon, EuiImage, EuiLink, EuiPage, EuiPageTemplate, EuiPanel, EuiSpacer, EuiStat, EuiText, EuiTextColor, EuiTitle } from "@elastic/eui"
import Chart from 'react-apexcharts';

export default function TeacherHome() {
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

      const [chart, setChart] = useState({  
        series: [10,5,5],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
                const labels = ['Vắng mặt', 'Không phép', 'Có phép'];
                return `${labels[opts.seriesIndex]}: ${opts.w.globals.series[opts.seriesIndex]}`;
            }
          },
            tooltip: {
              custom: function({ series, seriesIndex, w }) {
                const labels = ['Vắng mặt', 'Có phép', 'Không phép'];
                const value = series[seriesIndex];
                if (value === undefined) return ''; // Tránh lỗi khi không có giá trị.
        
                return `
                    <div style="
                        padding: 8px; 
                        background: #fff; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        font-size: 12px; 
                        color: #333;
                    ">
                        <b>${labels[seriesIndex]}</b>: ${value}
                    </div>
                `;
              }
          },
          title: {
            text: 'Điểm danh'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });

  return (
    <>
        <EuiPageTemplate.Header
        pageTitle="Trang chủ"/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlockStart:"0"}}}>
            <EuiText color='#1A6ECB' style={{paddingBlock:"5px"}}><h3>Thời khóa biểu</h3></EuiText>
            <EuiHorizontalRule size='half' margin='none' style={{marginInline:"0"}}/>
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
                      <EuiText color="#1A6ECB"><h3>Lớp chủ nhiệm</h3></EuiText>
                  </EuiFlexGroup>
                  <EuiSpacer/>
                  <Chart options={chart.options} series={chart.series} type="donut"  />
                </EuiPanel>
              </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </>
  )
}
