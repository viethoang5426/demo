import React, { useState } from 'react'
import {EuiFormRow,EuiPageTemplate,EuiFlexItem,EuiFieldSearch,EuiSelect,EuiButton,EuiFlexGroup,EuiButtonIcon,EuiText,EuiHorizontalRule, EuiButtonEmpty, EuiBasicTable, EuiIcon, EuiTextColor, EuiPopover, EuiFormControlLayout, EuiFieldText, EuiSelectable, EuiPopoverTitle, EuiBasicTableColumn, Criteria, EuiConfirmModal} from '@elastic/eui'
import AddSchool from './AddSchool'
import EditSchool from './EditSchool'

type Schools={
    tentruong:string,
    diachi:string,
    email:string,
    sodienthoai:string,
    training:string,
    giamsatkn:string
}
export default function ListSchool() {
    const columns:Array<EuiBasicTableColumn<Schools>>=[
        {field:'tentruong',name:'Tên trường học'},
        {field:'diachi',name:'Địa chỉ'},
        {field:'email',name:'Email'},
        {field:'sodienthoai',name:'Số điện thoại'},
        {field:'training',name:'Hệ đào tạo'},
        {field:'giamsatkn',name:'Giám sát kết nối',
            render:(item:Schools["giamsatkn"])=>(
                <EuiText color='#0071C2'>{item}</EuiText>
            )
        },
        {
            field:'thaotac',
            name:'Thao tác',
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="indexEdit" onClick={()=>setIsModalEdit(true)}/>
                    <EuiButtonIcon iconType="trash" color='danger' onClick={()=>setIsConfirmDelete(true)}/>
                </EuiFlexGroup>
            )
        }
    ]
    const items:Schools[]=[
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

    const onChangeTable=({page}:Criteria<Schools>)=>{
        if(page){
            const {index:pageIndex,size:pageSize}=page
            setPageIndex(pageIndex)
            setPageSize(pageSize)
        }
    }

    const findItem=(items:Schools[],pageIndex:number,pageSize:number)=>{
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
            { label: 'Hệ đào tạo', disabled: true, checked: false },
            { label: 'Tiểu học', checked: false },
            { label: 'Trung học cơ sở', checked: false },
            { label: 'Item', checked: false },
            { label: 'Item', checked: false }
        ]);
        const handleSelectionChange = (newOptions: any[]) => {
            setOptions(newOptions);
        };
        const selectedTraining=options.filter(option=>option.checked)


    const [isModal,setIsModal]=useState(false)
    const [isModalEdit,setIsModalEdit]=useState(false)
    const [isConfirmDelete,setIsConfirmDelete]=useState(false)
    const confirmDelete=(
        <EuiConfirmModal
        title="TRƯỜNG THPT BÁCH KHOA: XÓA"
        onCancel={()=>setIsConfirmDelete(false)}
        onConfirm={()=>setIsConfirmDelete(false)}
        cancelButtonText="Hủy"
        confirmButtonText="Xác nhận"
        buttonColor="danger">
            <EuiText>Bạn có muốn xoá tài khoản trường <b>THPT Bách Khoa</b> khỏi hệ thống ?</EuiText>
        </EuiConfirmModal>
    )
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
                                    {value:"",text:"Tỉnh/ Thành phố"}
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect options={[
                                    {value:"",text:"Quận/ huyện"}
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
                                        options={options.map(option => ({
                                            ...option,
                                            checked: option.checked ? 'on' : undefined
                                        }))}
                                        singleSelection
                                        onChange={handleSelectionChange}>
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
        {isModalEdit&&<EditSchool setIsModalEdit={setIsModalEdit}/>}
        {isConfirmDelete&&confirmDelete}
    </EuiPageTemplate>
  )
}
