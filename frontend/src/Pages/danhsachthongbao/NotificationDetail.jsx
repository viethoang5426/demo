import React from 'react'
import { EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiImage, EuiPageTemplate, EuiSpacer, EuiText } from '@elastic/eui'

export default function NotificationDetail() {
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup gutterSize='s' alignItems='center'>
                <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                <EuiText><h2>Nội quy trường học</h2></EuiText>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiImage src='assets/img.png' width="600" height="600"/>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiText>
                        <h3>Nội dung chi tiết nội quy</h3>
                        Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. When suddenly some wild JavaScript code appeared! const whoa = "!".
                    </EuiText>
                    <EuiSpacer size='s'/>
                    <EuiText><b>Phân loại:&nbsp;</b>Nội quy</EuiText>
                    <EuiSpacer size='s'/>
                    <EuiText><b>Thời gian thông báo:&nbsp;</b>11/07/2024 01:44</EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
