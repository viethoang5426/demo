import React, { useState } from 'react'
import { EuiBasicTable, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiImage, EuiLink, EuiPage, EuiPageTemplate, EuiPanel, EuiSpacer, EuiStat, EuiText, EuiTitle } from "@elastic/eui"
import Chart from 'react-apexcharts';
import SchoolAdminSideBar from '../../Components/Sidebar/SchoolAdminSideBar';

export default function SchoolAdmin() {
    const [state, setState] = useState({
        series: [70],
        options: {
          chart: {
            height: 200,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '50%', // Điều chỉnh kích thước khoảng trống
              },
              dataLabels: {
                name: {
                  show: false, // Ẩn tên để chỉ hiển thị giá trị
                },
                value: {
                  show: true,
                  color: '#333',
                  offsetY: 10, // Căn giữa dọc
                  fontSize: '22px',
                  fontWeight:800
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light', 
              type: 'horizontal',
              shadeIntensity: 0,
              gradientToColors: ['#FF8008'], 
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
              colorStops: [
                { offset: 0, color: '#FF8008', opacity: 1 }, 
                { offset: 100, color: '#FFC837', opacity: 1 },
              ],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          colors: ['#FFC837'],
        //   title: {
        //     text: 'Điểm danh',
        //     align: 'center',
        //     margin: 10,
        //     offsetY: 150,
        //     style: {
        //       fontSize: '20px',
        //       fontWeight: 'bold',
        //       color: '#333',
        //     },
        // }
        },
      });
      
      const columns = [
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
        {
          field: 'location',
          name: 'Địa điểm tổ chức',
        },
      ];
      
      const items = [
        {
          name: 'Giải bóng đá khối 10',
          organization: 'Phòng thể thao',
          email: 'backhoa@gmail.com',
          date: '30/02/2024',
          location: 'Sân vận động',
        },
        {
          name: 'Giải bóng đá khối 11',
          organization: 'Phòng thể thao',
          email: 'backhoa@gmail.com',
          date: '30/02/2024',
          location: 'Sân vận động',
        },
        {
          name: 'Giải bóng đá khối 12',
          organization: 'Tuyền Chí Lê',
          email: 'backhoa@gmail.com',
          date: '30/02/2024',
          location: 'Sân vận động',
        },
        {
          name: 'Hội thi văn nghệ 20/10',
          organization: 'Ngọc Chí Lê',
          email: 'backhoa@gmail.com',
          date: '30/02/2024',
          location: 'Sân vận động',
        },
      ];
  return (
    <>
        <EuiPageTemplate.Header
        pageTitle="Trang chủ"/>
        <EuiPageTemplate.Section>
            <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                    <EuiPanel style={{width:"350px"}}>
                        <EuiFlexGroup direction='column' gutterSize='none' alignItems='center'>
                            <Chart options={state.options} series={state.series} type="radialBar" height={200} />
                            <EuiText><h2>Điểm danh</h2></EuiText>
                        </EuiFlexGroup>
                        <EuiSpacer/>
                        <EuiFlexGroup justifyContent='center'>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup gutterSize='s' alignItems='center'>
                                    <div style={{width:"20px",height:"20px",background:"#FF8008"}}></div>
                                    <EuiText size='s'><b>Có mặt:&nbsp;1000</b></EuiText>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup gutterSize='s' alignItems='center'>
                                    <div style={{width:"20px",height:"20px",background:"#F2F2F2"}}></div>
                                    <EuiText size='s'><b>Tổng số:&nbsp;3000</b></EuiText>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiPanel>
                        <EuiFlexGroup>
                            <EuiFlexItem grow={false}>
                                <EuiImage src='/assets/logoSchool.png' width="85" height="130"/>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiText><h2><b>THPT Bách Khoa</b></h2></EuiText>
                                <EuiSpacer/>
                                <EuiText><b>Địa chỉ:&nbsp;</b>Số 1, Đường Đại Cồ Việt, phường Bách Khoa, Hà Nội</EuiText>
                                <EuiSpacer size='s'/>
                                <EuiText><b>Email:&nbsp;</b>bachkhoa@gmail.com</EuiText>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiLink>Thông tin chi tiết</EuiLink>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiPanel>
                    <EuiSpacer/>
                    <EuiFlexGroup>
                        <EuiPanel>
                            <EuiFlexGroup alignItems='center' gutterSize='s'>
                                <EuiIcon type="users" size='l'/>
                                <EuiLink><EuiText><h3>Quản lý tài khoản</h3></EuiText></EuiLink>
                            </EuiFlexGroup>
                            <EuiSpacer/>
                            <EuiFlexGroup justifyContent='spaceBetween'>
                                <EuiStat title={<EuiText><h4>1,000,000</h4></EuiText>} description="Học sinh"/>
                                <EuiStat title={<EuiText><h4>1,000,000</h4></EuiText>} description="Giáo viên"/>
                                <EuiStat title={<EuiText><h4>1,000</h4></EuiText>} description="Lớp học"/>
                            </EuiFlexGroup>
                        </EuiPanel>
                        <EuiPanel grow={false}>
                            <EuiFlexGroup alignItems='center' gutterSize='s'>
                                <EuiIcon type="documentation" size='l'/>
                                <EuiLink><EuiText><h3>Công nợ</h3></EuiText></EuiLink>
                            </EuiFlexGroup>
                            <EuiSpacer/>
                            <EuiStat title={<EuiText><h4>100 triệu / 1 tỉ VNĐ</h4></EuiText>} description="Đã thu/ Phải thu"/>
                        </EuiPanel>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiPanel>
                <EuiFlexGroup gutterSize='s'>
                    <EuiIcon type="bell" size='l'/>
                    <EuiText color="#1A6ECB"><h3>Sự kiện</h3></EuiText>
                </EuiFlexGroup>
                <EuiSpacer/>
                <EuiBasicTable
                tableLayout='auto'
                items={items}
                columns={columns}
                />
            </EuiPanel>
        </EuiPageTemplate.Section>
    </>
  )
}
