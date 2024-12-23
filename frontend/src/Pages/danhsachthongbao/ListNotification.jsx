import React, { useState } from 'react'
import { EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiImage, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"

export default function ListNotification() {
    const [isConfirm,setIsConFirm]=useState(false)
    const [isModal,setIsModal]=useState(false)
    let Confirm;
    if(isConfirm){
        Confirm=(
            <EuiConfirmModal
            style={{width:'600px'}}
            title="Xác nhận tham gia sự kiện"
            onCancel={()=>setIsConFirm(false)}
            onConfirm={()=>{}}
            cancelButtonText="Hủy"
            confirmButtonText="Xác nhận">
                <EuiText size='s'>Ấn xác nhận để đăng kí tham gia sự kiện:&nbsp;<b>Giải bóng đá khối 10</b></EuiText>
            </EuiConfirmModal>
        )
    }

    const [isPopoverNotification,setIsPopoverNotification]=useState(false)
        const [optionNotification, setOptionNotification] = useState([
        {label: 'Học tập',},
        {label: 'Sự kiện',},
        {label: 'Nội quy',},
        {label: 'Cuộc họp',},
    ])
    const selectedNotification=optionNotification.filter(option=>option.checked==="on")

    const [isPopoverYear,setIsPopoveryear]=useState(false)
        const [optionYear, setOptionYear] = useState([
        {label: '2024',},
        {label: '2023',},
        {label: '2022',},
        {label: '2021',},
    ])
    const selectedYear=optionYear.filter(option=>option.checked==="on")
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem>
                        <EuiFlexGroup gutterSize='s' alignItems='center'>
                            <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                            <EuiText><h1>Thông báo</h1></EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButton fill iconType="plusInCircle">Thêm mới thông báo</EuiButton>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm theo tên thông báo ...' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                            <EuiPopover
                            className='customPopover'
                            panelStyle={{width:'300px'}}
                            panelPaddingSize='none'
                            hasArrow={false}
                            isOpen={isPopoverNotification}
                            closePopover={()=>setIsPopoverNotification(false)}
                            button={
                                <EuiFormControlLayout onClick={()=>setIsPopoverNotification(!isPopoverNotification)} style={{fontSize:'14px'}} isDropdown fullWidth>
                                    <EuiFieldText placeholder='Phân loại' value={selectedNotification[0]?.label} fullWidth/>
                                </EuiFormControlLayout>
                            }>
                                <EuiSelectable
                                    options={optionNotification}
                                    singleSelection
                                    onChange={(newOptions) => setOptionNotification(newOptions)}>
                                    {(list)=>(<>{list}</>)}
                                </EuiSelectable>
                            </EuiPopover>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s'>Học kỳ: I</EuiButtonEmpty>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiPopover
                            panelStyle={{width:'300px'}}
                            panelPaddingSize='s'
                            hasArrow={false}
                            isOpen={isPopoverYear}
                            closePopover={()=>setIsPopoveryear(false)}
                            button={
                                <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s' onClick={()=>setIsPopoveryear(!isPopoverYear)}>Năm học: 2024-2025</EuiButtonEmpty>
                            }>
                                <EuiSelectable
                                    options={optionYear}
                                    singleSelection
                                    searchable
                                    onChange={(newOptions) => setOptionYear(newOptions)}>
                                    {(search ,list)=>(
                                        <>
                                        {list}
                                        {search}
                                        </>
                                    )}
                                </EuiSelectable>
                        </EuiPopover>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
