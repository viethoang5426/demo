import React, { Fragment, useMemo, useState } from 'react'
import { EuiAvatar, EuiButtonIcon, EuiFlexGroup,EuiFlexItem,EuiText,EuiButtonEmpty, EuiFlyout, EuiFlyoutBody, EuiFlyoutFooter, EuiFlyoutHeader, EuiHeader, EuiHeaderAlert, EuiHeaderBreadcrumbs, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiLink, EuiPageHeader, EuiPageHeaderContent, EuiPortal, EuiTitle, EuiHorizontalRule, EuiSpacer, EuiTabs, EuiTab } from '@elastic/eui'

export default function Header() {
    const [selectedTabId, setSelectedTabId] = useState(1);
    const alerts = [
        {
          title: 'Thêm mới trường học',
          text: 'Tạo mới trường học: THPT Bách Khoa Hà Nội',
          action: <EuiLink href="">Xem chi tiết</EuiLink>,
          date: '14:00 20/10/2024',
        },
        {
            title: 'Thêm mới trường học',
            text: 'Tạo mới trường học: THPT Bách Khoa Hà Nội',
            action: <EuiLink href="">Xem chi tiết</EuiLink>,
            date: '14:00 20/10/2024',
        },
        {
            title: 'Thêm mới trường học',
            text: 'Tạo mới trường học: THPT Bách Khoa Hà Nội',
            action: <EuiLink href="">Xem chi tiết</EuiLink>,
            date: '14:00 20/10/2024',
        },
    ]

    const tabs = [
            { id: 1, name: 'Tất cả', 
                content:(
                    <Fragment>
                        {alerts.map((alert, i) => (
                        <EuiHeaderAlert
                        key={`alert-${i}`}
                        title={alert.title}
                        action={alert.action}
                        text={alert.text}
                        date={alert.date}
                        />
                    ))}
                    </Fragment>
                )
            },
            { id: 2, name: 'Học tập',},
            { id: 3, name: 'Sự kiện',},
            { id: 4, name: 'Nội quy',},
            { id: 5, name: 'Cuộc họp',},
        ];
    const selectedTabContent = useMemo(() => {
        return tabs.find((obj) => obj.id === selectedTabId)?.content;
    }, [selectedTabId]);

    const onSelectedTabChanged = (id) => {
        setSelectedTabId(id);
    };
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

    const flyout = (
        <EuiPortal>
          <EuiFlyout
            onClose={()=>setIsFlyoutVisible(false)}
            size="s"
            style={{width:'400px'}}
          >
            <EuiFlyoutHeader hasBorder style={{paddingBlockEnd:0}}>
              <EuiTitle size="s">
                <h2>Thông báo</h2>
              </EuiTitle>
              <EuiSpacer size='s'/>
              <EuiTabs bottomBorder={false}>
                <EuiFlexGroup gutterSize='s'>
                    {tabs.map((tab, index) => (
                    <EuiTab
                        key={index}
                        href={tab.href}
                        onClick={() => onSelectedTabChanged(tab.id)}
                        isSelected={tab.id === selectedTabId}
                        prepend={tab.prepend}
                        append={tab.append}
                    >
                        {tab.name}
                    </EuiTab>
                    ))}
                </EuiFlexGroup>
            </EuiTabs>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
            {selectedTabContent}
            </EuiFlyoutBody>
          </EuiFlyout>
        </EuiPortal>
      );

  return (
    <EuiPageHeader>
        {isFlyoutVisible&&flyout}
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
                        <EuiHeaderSectionItemButton notification={1} onClick={()=>setIsFlyoutVisible(true)}>
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
