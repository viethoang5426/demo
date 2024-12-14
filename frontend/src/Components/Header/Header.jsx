import React from 'react'
import { EuiAvatar, EuiButtonIcon, EuiFlexGroup, EuiHeader, EuiHeaderBreadcrumbs, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiPageHeader, EuiPageHeaderContent } from '@elastic/eui'

export default function Header() {
  return (
    <EuiPageHeader>
      <EuiPageHeaderContent>
        <EuiHeader position='fixed' style={{width:'100%'}}>
            <EuiHeaderSection>
                <EuiFlexGroup gutterSize='s'>
                <EuiHeaderSectionItem>
                    <EuiHeaderSectionItemButton>
                        <EuiIcon type="menu"/>
                    </EuiHeaderSectionItemButton>
                </EuiHeaderSectionItem>
                <EuiHeaderSectionItem>
                    <EuiImage src="/assets/logo.png" width="100px" height="25px"/>
                </EuiHeaderSectionItem>
                <EuiHeaderSectionItem>
                    <EuiAvatar name='S' type='space' size='s' color="#68C4A2"/>
                </EuiHeaderSectionItem>
                <EuiHeaderSectionItem>
                    <EuiHeaderBreadcrumbs
                            max={2}
                            breadcrumbs={[
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Hồ sơ học sinh"},
                            ]}/>
                </EuiHeaderSectionItem>
                </EuiFlexGroup>
            </EuiHeaderSection>
            <EuiHeaderSection side='right'>
                <EuiFlexGroup gutterSize='s' responsive={false}>
                    <EuiHeaderSectionItem>
                        <EuiHeaderSectionItemButton notification={1}>
                            <EuiIcon type="bell"/>
                        </EuiHeaderSectionItemButton>
                    </EuiHeaderSectionItem>
                    <EuiHeaderSectionItem>
                        <EuiHeaderSectionItemButton notification={1}>
                            <EuiIcon type="email"/>
                        </EuiHeaderSectionItemButton>
                    </EuiHeaderSectionItem>
                    <EuiHeaderSectionItem>
                        <EuiAvatar name='S' size='s' color="#68C4A2"/>
                    </EuiHeaderSectionItem>
                    <EuiHeaderSectionItem>
                        <EuiHeaderSectionItemButton>
                            <EuiIcon type="apps"/>
                        </EuiHeaderSectionItemButton>
                    </EuiHeaderSectionItem>
                </EuiFlexGroup>
            </EuiHeaderSection>
        </EuiHeader>
      </EuiPageHeaderContent>
    </EuiPageHeader>
  )
}
