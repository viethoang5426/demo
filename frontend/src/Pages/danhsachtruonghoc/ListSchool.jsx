import React, { useState } from 'react'
import {EuiFormRow,EuiPageTemplate,EuiFlexItem,EuiFieldSearch,EuiSelect,EuiButton,EuiFlexGroup,EuiButtonIcon,EuiText,EuiHorizontalRule, EuiButtonEmpty, EuiBasicTable, EuiIcon, EuiTextColor, EuiPopover, EuiFormControlLayout, EuiFieldText, EuiSelectable, EuiPopoverTitle} from '@elastic/eui'
import AddSchool from './AddSchool'

export default function ListSchool() {
    const columns=[
        {field:'tentruong',name:'Tên trường học'},
        {field:'diachi',name:'Địa chỉ'},
        {field:'email',name:'Email'},
        {field:'sodienthoai',name:'Số điện thoại'},
        {field:'training',name:'Hệ đào tạo'},
        {field:'giamsatkn',name:'Giám sát kết nối',
            render:(item)=>(
                <EuiText color='#0071C2'>{item}</EuiText>
            )
        },
        {
            field:'thaotac',
            name:'Thao tác',
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="indexEdit"/>
                    <EuiButtonIcon iconType="trash" color='danger'/>
                </EuiFlexGroup>
            )
        }
    ]
    const items=[
        {'tentruong':'THPT Bách Khoa1','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa2','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa3','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa4','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa5','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa6','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa7','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa8','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa9','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa10','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa11','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa12','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa13','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa14','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa15','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa16','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa16','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa17','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383',training:"THPT",'giamsatkn':'1000GB'},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChangeTable=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const findItem=(items,pageIndex,pageSize)=>{
        let itemOfPage;
        if(!pageIndex && !pageSize)
        {
            itemOfPage=items
        }else{
            itemOfPage=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPage};
    }
    const {itemOfPage}=findItem(items,pageIndex,pageSize)
    const pagination={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[10,5,0],
    }

    const [isPopoverTraining,setIsPopoverTraining]=useState(false)
      const [options, setOptions] = useState([
        {label: 'Hệ đào tạo',disabled: true,},
        {label: 'Tiểu học',},
        {label: 'Trung học cơ sở',},
        {label: 'Item',},
        {label: 'Item',}
    ])
    const selectedTraining=options.filter(option=>option.checked==="on")

    const [isModal,setIsModal]=useState(false)
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
            pageTitle={
                <EuiFlexGroup direction='column' gutterSize='s'>
                    <EuiFlexGroup>
                        <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                            <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                            <EuiText><h3>Quản lý trường học</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiButton iconType="plusInCircle"onClick={()=>setIsModal(true)} fill>Tạo mới trường học</EuiButton>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center' gutterSize='s'>
                        <EuiFlexItem grow={2}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiFieldSearch placeholder='Tìm kiếm theo ID người dùng ...' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect options={[
                                    {value:"",label:"Tỉnh/ Thành phố"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect options={[
                                    {value:"",label:"Quận/ huyện"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiPopover
                                panelStyle={{width:'200px'}}
                                panelPaddingSize='s'
                                hasArrow={false}
                                isOpen={isPopoverTraining}
                                closePopover={()=>setIsPopoverTraining(false)}
                                button={
                                <EuiFormControlLayout isDropdown onClick={()=>setIsPopoverTraining(!isPopoverTraining)}>
                                    <EuiFieldText placeholder='Hệ đào tạo' value={selectedTraining[0]?.label}/>
                                </EuiFormControlLayout>
                                }>
                                    <EuiSelectable
                                    options={options}
                                        singleSelection
                                        onChange={(newOptions) => setOptions(newOptions)}>
                                        {(list)=>(<>{list}</>)}
                                    </EuiSelectable>
                                </EuiPopover>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right'>Học kì: I</EuiButtonEmpty>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right'>Năm học: 2024-2025</EuiButtonEmpty>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexGroup>
            }/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiBasicTable
                tableLayout='auto'
                columns={columns}
                items={itemOfPage}
                pagination={pagination}
                onChange={onChangeTable}/>
        </EuiPageTemplate.Section>
        {isModal&&<AddSchool setIsModal={setIsModal}/>}
    </EuiPageTemplate>
  )
}
