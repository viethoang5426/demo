import React, { useState } from 'react'
import { EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiImage, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"
import AddEvent from './AddEvent';

export default function ListEvent() {
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

    const [isPopoverEvent,setIsPopoverEvent]=useState(false)
        const [optionEvent, setOptionEvent] = useState([
        {label: 'Phân loại sự kiện',},
        {label: 'Tất cả',},
        {label: 'Bắt buộc',},
        {label: 'Không bắt buộc',},
    ])
    const selectedEvent=optionEvent.filter(option=>option.checked==="on")

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
                            <EuiText><h1>Sự kiện</h1></EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup>
                            <EuiButton fill iconType="userAvatar">Sự kiện của tôi</EuiButton>
                            <EuiButton fill iconType="plusInCircle" onClick={()=>setIsModal(true)}>Tạo mới sự kiện</EuiButton>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm theo tên sự kiện' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                            <EuiPopover
                            className='customPopover'
                            panelStyle={{width:'300px'}}
                            panelPaddingSize='none'
                            hasArrow={false}
                            isOpen={isPopoverEvent}
                            closePopover={()=>setIsPopoverEvent(false)}
                            button={
                                <EuiFormControlLayout onClick={()=>setIsPopoverEvent(!isPopoverEvent)} style={{fontSize:'14px'}} isDropdown fullWidth>
                                    <EuiFieldText placeholder='Phân loại' value={selectedEvent[0]?.label} fullWidth/>
                                </EuiFormControlLayout>
                            }>
                                <EuiSelectable
                                    options={optionEvent}
                                    singleSelection
                                    onChange={(newOptions) => setOptionEvent(newOptions)}>
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
        <EuiPageTemplate.Section>
            <EuiFlexGrid columns={4}>
                {[1,2,3,4,5,6,7,8].map(item=>(<EuiFlexItem key={item}>
                    <EuiCard
                    className='customCard'
                    image={
                        <div>
                            <img src="/assets/event.png" alt="" height="130" style={{objectFit:'cover'}}/>
                        </div>
                    }
                    title="Giải bóng đá khối 10"
                    description={
                        <p>
                            <EuiText size='s'>16:00 30/02/2024 - 18:00 30/02/2024 </EuiText>
                            <EuiText size='s'>Sân vận động</EuiText>
                        </p>
                    }
                    footer={
                        <EuiFlexGroup style={{marginBlockStart:'-16px'}}>
                            <EuiButton>Xem chi tiết</EuiButton>
                            <EuiButton fill onClick={()=>setIsConFirm(true)}>Tham gia</EuiButton>
                        </EuiFlexGroup>
                    }
                    betaBadgeProps={{
                        label:"New"
                    }}/>
                </EuiFlexItem>))}
            </EuiFlexGrid>
        </EuiPageTemplate.Section>
        {Confirm}
        {isModal&&<AddEvent setIsModal={setIsModal}/>}
    </EuiPageTemplate>
  )
}
