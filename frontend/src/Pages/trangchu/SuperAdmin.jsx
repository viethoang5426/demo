import React, { useState } from 'react'
import { EuiBasicTable, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiImage, EuiLink, EuiPage, EuiPageTemplate, EuiPanel, EuiSpacer, EuiStat, EuiText, EuiTextColor, EuiTitle } from "@elastic/eui"
import Chart from 'react-apexcharts';

export default function SuperAdmin() {
      const columns = [
        {
          field: 'name',
          name: 'Tên trường học',
          render: (name) => (
            <EuiLink href="#">
              {name}
            </EuiLink>
          ),
        },
        {
          field: 'address',
          name: 'Địa chỉ',
        },
        {
          field: 'email',
          name: 'Email',
        },
        {
          field: 'phone',
          name: 'Số điện thoại',
        },
        {
          field: 'principal',
          name: 'Hiệu trưởng',
        },
      ];
      
      const items = [
        {
          name: 'THPT Bách Khoa',
          address: 'Số 1 Đại Cồ Việt, Hà Nội',
          email: 'backhoa@gmail.com',
          phone: '0987654321',
          principal: 'Lê Chí Tuyền',
        },
        {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
          {
            name: 'THPT Bách Khoa',
            address: 'Số 1 Đại Cồ Việt, Hà Nội',
            email: 'backhoa@gmail.com',
            phone: '0987654321',
            principal: 'Lê Chí Tuyền',
          },
      ];
       const [pageIndex,setPageIndex]=useState(0)
          const [pageSize,setPageSize]=useState(10)
      
          const onChange=({page,sort})=>{
              const {index:pageIndex,size:pageSize}=page
              setPageIndex(pageIndex)
              setPageSize(pageSize)
          }
      
          const itemOfPage=(items,pageIndex,pageSize)=>{
              let itemOfPages;
              if(!pageIndex && !pageSize){
                  itemOfPages=items
              }else{
                  itemOfPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
              }
              return itemOfPages
          }
          const itemOfPages=itemOfPage(items,pageIndex,pageSize)
      
          const pagination={
              pageIndex,
              pageSize,
              totalItemCount:items.length,
              pageSizeOptions:[0,5,10,20]
          }
  return (
    <>
        <EuiPageTemplate.Header
        pageTitle="Trang chủ"/>
        <EuiPageTemplate.Section>
            <EuiFlexGroup justifyContent='center'>
                <EuiStat title={<EuiText><h3>1,000,000</h3></EuiText>} style={{width:"200px"}} description="Tường học"/>
                <EuiStat title={<EuiText><h3>1,000,000</h3></EuiText>} style={{width:"200px"}} description="Giáo viên"/>
                <EuiStat title={<EuiText><h3>1,000</h3></EuiText>} style={{width:"200px"}} description="Học sinh"/>
                <EuiStat title={<EuiText><h3>100GB/&nbsp;<EuiTextColor color='danger'>200GB</EuiTextColor></h3></EuiText>} style={{width:"200px"}} description="Dữ liệu đã dùng"/>
            </EuiFlexGroup>
            <EuiSpacer/>
            <EuiBasicTable
            tableLayout='auto'
            items={itemOfPages}
            columns={columns}
            onChange={onChange}
            pagination={pagination}
            />
        </EuiPageTemplate.Section>
    </>
  )
}
