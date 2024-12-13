import React from 'react'
import Header from '../Components/Header/Header'
import { EuiBasicTable, EuiButton, EuiButtonIcon, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiPageTemplate, EuiSelect, EuiText } from '@elastic/eui'

export default function AccountManagement() {
    
  return (
    <>
    <EuiPageTemplate style={{background:'white'}}>
    <Header/>
        <EuiPageTemplate.Header
            pageTitle={
                <EuiFlexGroup direction='column' gutterSize='s'>
                    <EuiFlexGroup>
                        <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                            <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                            <EuiText><h3>Quản lý tài khoản</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiButton iconType="plusInCircle" fill>Tạo mới tài khoản</EuiButton>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center'>
                        <EuiFlexItem>
                            <EuiFormRow>
                                <EuiFieldSearch placeholder='Tìm kiếm theo ID người dùng ...'/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow>
                                <EuiSelect options={[
                                    {value:"",label:"Trường học"}
                                ]}/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow>
                                <EuiSelect options={[
                                    {value:"",label:"Phân quyền"}
                                ]}/>
                            </EuiFormRow>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexGroup>
            }/>
        <EuiPageTemplate.Section>
            <EuiBasicTable
            items={[]}
            columns={[]}
            />
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
    </>
  )
}
