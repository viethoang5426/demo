import React from 'react'
import { EuiFlexGroup, EuiLink, EuiPageTemplate, EuiText } from '@elastic/eui'

export default function Footer() {
  return (
    <EuiPageTemplate.BottomBar paddingSize='s'>
        <EuiFlexGroup justifyContent='spaceBetween'>
            <EuiText>School Connected M- Hệ thống quản lý trường học</EuiText>
            <EuiLink color='text'>info@ecotel.com.vn</EuiLink>
        </EuiFlexGroup>
    </EuiPageTemplate.BottomBar>
  )
}
