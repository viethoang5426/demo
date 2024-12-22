import React, { Fragment, useMemo, useState } from 'react'
import { EuiPageTemplate,EuiFlexGroup,EuiFlexItem,EuiButtonIcon,EuiText,EuiButton,EuiAvatar,EuiButtonEmpty, EuiHorizontalRule, EuiTabs, EuiTab, EuiSpacer } from "@elastic/eui"
import ListBlock from './ListBlock';
import ListClass from './ListClass';
import ListSubject from './ListSubject';
import ListDepartment from './ListDepartment';
import ListClassroom from './ListClassroom';
import AddBlock from './AddBlock';
import AddClass from './AddClass';
import AddClassroom from './AddClassroom';
import AddSubject from './AddSubject';
import AddDepartment from './AddDepartment';

export default function ClassManagement() {
    const [isModalClassroom,setIsModalClassroom]=useState(false)
    const [isModalClass,setIsModalClass]=useState(false)
    const [isModalBlock,setIsModalBlock]=useState(false)
    const [isModalSubject,setIsModalSubject]=useState(false)
    const [isModalDepartment,setIsModalDepartment]=useState(false)

    const [selectedTabId, setSelectedTabId] = useState(1);

    const tabs = [
        { id: 1, name: 'Danh sách khối', content: <ListBlock/> },
        { id: 2, name: 'Danh sách lớp học', content: <ListClass/>},
        { id: 3, name: 'Danh sách phòng học', content: <ListClassroom/>},
        { id: 4, name: 'Danh sách môn học', content: <ListSubject/>},
        { id: 5, name: 'Danh sách phòng/ban', content: <ListDepartment/>},
    ];


        const selectedTabContent = useMemo(() => {
            return tabs.find((obj) => obj.id === selectedTabId)?.content;
        }, [selectedTabId]);

        const onSelectedTabChanged = (id) => {
            setSelectedTabId(id);
        };
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header 
        bottomBorder={false}
        alignItems='center'
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup gutterSize='s'>
                        <EuiFlexItem grow={false}>
                            <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiText><h2>Quản lý lớp học</h2></EuiText>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFlexGroup alignItems='center'>
                                <EuiAvatar name='' imageUrl='/assets/avat.png'/>
                                <EuiText size='s'><strong>Trường THPT Bách Khoa</strong></EuiText>
                                <EuiText size='s'><span><strong>Hiệu trưởng:&nbsp;</strong>Lê Chí Tuyền</span></EuiText>
                                <EuiText size='s'><span><strong>Tổng số lớp học:&nbsp;</strong>30</span></EuiText>
                                <EuiText size='s'><span><strong>SĐT:&nbsp;</strong>0123456789</span></EuiText>
                                <EuiText size='s'><span><strong>Email:&nbsp;</strong>lechituyen@gmail.com</span></EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiButtonEmpty iconSide='right' iconType="arrowDown" iconSize='s'>Học kì: I</EuiButtonEmpty>
                                <EuiButtonEmpty iconSide='right' iconType="arrowDown" iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        } 
        />
        <EuiPageTemplate.Section contentProps={{style: { paddingBlockStart: '0px' },}}>
            <EuiHorizontalRule margin='none'/>
            <EuiTabs>
                <EuiFlexGroup justifyContent='spaceBetween'>
                    <EuiFlexItem>
                        <EuiFlexGroup>
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
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        {selectedTabId===1&&<EuiButton onClick={()=>setIsModalBlock(true)} iconType="plusInCircle" fill>Tạo mới khối</EuiButton>}
                        {selectedTabId===2&&<EuiButton onClick={()=>setIsModalClass(true)} iconType="plusInCircle" fill>Tạo mới lớp học</EuiButton>}
                        {selectedTabId===3&&<EuiButton onClick={()=>setIsModalClassroom(true)} iconType="plusInCircle" fill>Tạo mới phòng học</EuiButton>}
                        {selectedTabId===4&&<EuiButton onClick={()=>setIsModalSubject(true)} iconType="plusInCircle" fill>Tạo mới môn học</EuiButton>}
                        {selectedTabId===5&&<EuiButton onClick={()=>setIsModalDepartment(true)} iconType="plusInCircle" fill>Tạo mới phòng ban</EuiButton>}
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiTabs>
            {selectedTabContent}
        </EuiPageTemplate.Section>
        {isModalClass&&<AddClass setIsModalClass={setIsModalClass}/>}
        {isModalBlock&&<AddBlock setIsModalBlock={setIsModalBlock}/>}
        {isModalClassroom&&<AddClassroom setIsModalClassroom={setIsModalClassroom}/>}
        {isModalSubject&&<AddSubject setIsModalSubject={setIsModalSubject}/>}
        {isModalDepartment&&<AddDepartment setIsModalDepartment={setIsModalDepartment}/>}
    </EuiPageTemplate>
  )
}
