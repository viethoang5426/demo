import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem,slugify , EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup, EuiPageTemplate, EuiPageSidebar, EuiLink, EuiSideNav } from '@elastic/eui';

export default function SchoolAdminSideBar() {
  return (
    <>
        <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false} style={{ padding: '4px 8px' }}>
            <EuiFlexItem grow={false} style={{ padding: '5px', border: '1px solid gray', borderRadius: '50%', boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
            <EuiIcon type="gear" />
            </EuiFlexItem>
            <EuiText><strong>SCM</strong></EuiText>
        </EuiFlexGroup>

        <EuiSideNav
        items={[
            {
                name:"Trang chủ",
                id:0
            }
        ]}/>
        <EuiSideNav
        isOpenOnMobile={true}
        items={[
            {
                name: 'Trường học',
                id: 1,
                items: [
                {
                    name: 'Thông tin',
                    id: 2,  
                    icon: <EuiIcon type="bell"/>,
                    href: '#',
                },
                {
                    name: 'Sự kiện',
                    id: 3,
                    icon: <EuiIcon type="starFilled"/>,
                    href: '#',
                },
                {
                    name: 'Thông báo',
                    id: 4,
                    icon: <EuiIcon type="article"/>,
                    href: '#',
                },
            ]
            }
        ]}/>
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
    </>
  );
}
