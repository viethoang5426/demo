import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem,slugify , EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup, EuiPageTemplate, EuiPageSidebar, EuiLink, EuiSideNav, EuiSpacer } from '@elastic/eui';

export default function SchoolAdminSideBar() {
    const createItem = (name, data = {}) => {
        return {
          id: name,
          name:<EuiText><b>{name}</b></EuiText>,
          ...data,
        };
      };
  return (
    <>
        <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false} style={{ padding: '4px 8px' }}>
            <EuiFlexItem grow={false} style={{ padding: '5px', border: '1px solid gray', borderRadius: '50%', boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
            <EuiIcon type="managementApp" />
            </EuiFlexItem>
            <EuiText><strong>SCM</strong></EuiText>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiSideNav
        items={[
            {
                items: [
                    createItem('Trang chủ',{
                        href:"#"
                    })
                    ]
            }
        ]}/>
        <EuiSideNav
            isOpenOnMobile={true}
            items={[
                {
                    items: [
                        createItem('Trường học', {
                            forceOpen: true,
                            items: [
                                {
                                    name: 'Thông tin',
                                    id: 2,  
                                    icon: <EuiIcon type="bell"/>,
                                    href: '#',
                                },
                                {
                                    name: 'Sự kiện',
                                    id: 'Sự kiện',  
                                    icon: <EuiIcon type="starFilled"/>,
                                    href: '#',
                                },
                                {
                                    name: 'Thông báo',
                                    id: 'Thông báo',  
                                    icon: <EuiIcon type="article"/>,
                                    href: '#',
                                },
                            ],
                        }),
                    ]
                }
            ]}  
            />
        <EuiSideNav
        isOpenOnMobile={true}
        items={[
            {
                name: 'Học tập',
                id: 1,
                items: [
                {
                    name: 'Thời khóa biểu',
                    id: 2,  
                    icon: <EuiIcon type="calendar"/>,
                    href: '#',
                },
                {
                    name: 'Học sinh',
                    id: 3,
                    icon: <EuiIcon type="users"/>,
                    href: '#',
                },
                {
                    name: 'Giáo viên',
                    id: 4,
                    icon: <EuiIcon type="training"/>,
                    href: '#',
                },
            ]
            }
        ]}/>
        <EuiSideNav
        items={[
            {
                items: [
                    createItem('Học phí', {
                        forceOpen: true,
                        items: [
                            {
                                name: 'Công nợ',
                                id: 2,  
                                icon: <EuiIcon type="bell"/>,
                                href: '#',
                            },
                        ]
                    }
                )
            ]
            }
        ]}/>
        <EuiSideNav
        items={[
            {
                items: [
                    createItem('Cài đặt', {
                        forceOpen: true,
                        items: [
                            {
                                name: 'Quản lý tài khoản',
                                id: 2,  
                                icon: <EuiIcon type="gear"/>,
                                href: '#',
                            },
                            {
                                name: 'Quản lý lớp học',
                                id: 2,  
                                icon: <EuiIcon type="gear"/>,
                                href: '#',
                            },
                            {
                                name: 'Quản lý học phí',
                                id: 2,  
                                icon: <EuiIcon type="gear"/>,
                                href: '#',
                            },
                        ]
                    }
                )
            ]
            }
        ]}/>
    </>
  );
}
