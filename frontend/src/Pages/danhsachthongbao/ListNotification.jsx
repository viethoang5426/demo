import React, { useState } from 'react'
import { EuiBadge, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard,EuiCodeBlock, EuiConfirmModal, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiImage, EuiLink, EuiPageTemplate, EuiPopover, EuiSelectable, EuiText } from "@elastic/eui"
import AddNotification from './AddNotification'
import EditNotification from './EditNotification'

export default function ListNotification() {
    const [isConfirm,setIsConFirm]=useState(false)
    const [isModalAdd,setIsModalAdd]=useState(false)
    const [isModalEdit,setIsModalEdit]=useState(false)

    let Confirm;
    if(isConfirm){
        Confirm=(
            <EuiConfirmModal
            title="Xác nhận xóa thông báo"
            onCancel={()=>setIsConFirm(false)}
            onConfirm={()=>{}}
            cancelButtonText="Hủy"
            confirmButtonText="Xác nhận"
            buttonColor="danger"
            defaultFocusedButton="confirm">
                <EuiText size='s'>Bạn có muốn xóa thông báo Thu học phí khối 10</EuiText>
            </EuiConfirmModal>
        )
    }

    const [isPopoverNotification,setIsPopoverNotification]=useState(false)
        const [optionNotification, setOptionNotification] = useState([
        {label: 'Học tập',},
        {label: 'Sự kiện',},
        {label: "Nội quy",},
        {label: 'Cuộc họp',},
    ])
    const selectedNotification=optionNotification.filter(option=>option.checked==="on")

    const columns=[
        {field:"name",name:"Tên thông báo",
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:"category",name:"Phân loại"},
        {field:"date",name:"Thời gian thông báo"},
        {field:"role",name:"Người nhận thông báo"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="indexEdit" onClick={()=>setIsModalEdit(true)} color='success'/>
                    <EuiButtonIcon iconType="trash" onClick={()=>setIsConFirm(true)} color='danger'/>
                </EuiFlexGroup>
            )
        },
    ]
    const items=[
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thời khóa biểu kì I 2024",category:"Sự kiện",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Nội quy",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Nội quy",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
        {name:"Thu học phí khối 10",category:"Học tập",date:"30/02/2024",role:"Học sinh"},
    ]

    const [pageIndex,setPageIndex]=useState(0)
        const [pageSize,setPageSize]=useState(10)
    
        const onChange=({page,sort})=>{
            const {index:pageIndex,size:pageSize}=page
            setPageIndex(pageIndex)
            setPageSize(pageSize)
        }
    
        const itemOfPage=(items,pageIndex,pageSize)=>{
            let itemOfPages;
            if(!pageIndex && !pageSize){
                itemOfPages=items
            }else{
                itemOfPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
            }
            return itemOfPages
        }
        const itemOfPages=itemOfPage(items,pageIndex,pageSize)
    
        const pagination={
            pageIndex,
            pageSize,
            totalItemCount:items.length,
            pageSizeOptions:[0,5,10,20]
        }
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
                        <EuiButton fill iconType="plusInCircle" onClick={()=>setIsModalAdd(true)}>Thêm mới thông báo</EuiButton>
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
                        <EuiButtonEmpty iconType="arrowDown" iconSide='right' iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiBasicTable
            tableLayout='auto'
            columns={columns}
            items={itemOfPages}
            onChange={onChange}
            pagination={pagination}/>
        </EuiPageTemplate.Section>
        {Confirm}
        {isModalAdd&&<AddNotification setIsModalAdd={setIsModalAdd}/>}
        {isModalEdit&&<EditNotification setIsModalEdit={setIsModalEdit}/>}
    </EuiPageTemplate>
  )
}
