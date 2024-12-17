import { EuiButtonIcon, EuiFlexGroup, EuiPageTemplate,EuiBasicTable,EuiLink,EuiHealth,EuiFormRow,EuiTextArea, EuiText,EuiFlexItem,EuiButton,EuiAvatar,EuiPopover,EuiIcon, EuiButtonEmpty, EuiHorizontalRule, EuiSpacer, EuiPageSection, EuiPageBody, EuiConfirmModal } from '@elastic/eui'
import React, { useState } from 'react'

export default function StudentTranscript() {
    const column1=[
        {
            field:'monhoc',
            name:'Môn học',
            render:(item)=>(
                <EuiLink size='s'>{item}</EuiLink>
            ),
            footer:()=>{
                return <EuiLink size='s'><b>ĐTH tất cả các môn học</b></EuiLink>
            },
        },
        {
            field:'hk1',
            name:'Học kì I',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.hk1, 0);
                const average = (total / items.length).toFixed(0);
                return <EuiText size='s'>{average}</EuiText>
            }
        },
        {
            field:'hk2',
            name:'Học kì II',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.hk2, 0);
                const average = (total / items.length).toFixed(0);
                return <EuiText size='s'>{average}</EuiText>
            }
        },
        {
            field:'cuoinam',
            name:'Cuối năm',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.cuoinam, 0);
                const average = (total / items.length).toFixed(0);
                return <EuiText size='s'>{average}</EuiText>
            }
        },
        {
            field:'gv',
            name:'Giáo viên phụ trách',
            footer:()=>{
                return <EuiText size='s'>Giáo viên chủ nhiệm</EuiText>
            }
        },
        {
            field:'thaotac',
            name:'',
            render:()=>(
                <EuiIcon type="indexEdit" color='#00BFB3'/>
            ),
            footer:()=>{
                return <EuiIcon type="indexEdit" color='#00BFB3'/>
            },
            width:'70px'
        },
    ]

    const item1=[
        {monhoc:'Toán học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Ngữ văn',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Tiếng anh',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Vật lý',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Hóa học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Sinh học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Địa lý',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Lịch sử',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Giáo dục công dân',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Công nghệ',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
    ]
    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }
    const itemOfPage=(item1,pageIndex,pageSize)=>{
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=item1
        }else{
            itemOfPages=item1.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPages}
    }
    const {itemOfPages}=itemOfPage(item1,pageIndex,pageSize)
    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:item1.length,
        pageSizeOptions:[0,5,10]
    }

    const column2=[
        {
            field:'hk',
            name:'Học kỳ',
            render:(item)=>(
                <EuiLink size='s'>{item}</EuiLink>
            )
        },
        {field:'hocluc',name:'Xếp loại học lực'},
        {field:'hanhkiem',name:'Xếp loại hạnh kiểm'},
    ]

    const item2=[
        {hk:'Học kì 1',hocluc:'Giỏi',hanhkiem:'Tốt'},
        {hk:'Học kì 2',hocluc:'Giỏi',hanhkiem:'Tốt'},
        {hk:'Cả năm',hocluc:'10',hanhkiem:'Tốt'},
    ]

    const [modalConfirm,setModalConfirm]=useState(false)

    let confirm;
    if(modalConfirm){
        confirm=(
            <EuiConfirmModal
            title="Xác nhận gửi thông tin"
            onCancel={()=>setModalConfirm(false)}
            onConfirm={()=>setModalConfirm(false)}
            cancelButtonText="Hủy bỏ"
            confirmButtonText="Gửi">
                <EuiText size='s'>Sau khi gửi thông tin lên hệ thống, bạn sẽ không thể chỉnh sửa. Ban có chắc chắn muốn tiếp tục?</EuiText>
            </EuiConfirmModal>
        )
    }

  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header 
        bottomBorder={false}
        alignItems='center'
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup justifyContent='spaceBetween'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={false}>
                                    <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiText><h2>Học bạ học sinh</h2></EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButton fill iconType="plusInCircle">Chỉnh sửa</EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFlexGroup alignItems='center' gutterSize='m'>
                                <EuiAvatar name='' imageUrl='/assets/avat.png'/>
                                <EuiText size='s'><span><strong>Họ và tên:&nbsp;</strong>Lê Chí Tuyền</span></EuiText>
                                <EuiText size='s'><span><strong>Lớp:&nbsp;</strong>12A12</span></EuiText>
                                <EuiText size='s'><span><strong>Trường:&nbsp;</strong>THPT Bách Khoa</span></EuiText>
                                <EuiText size='s'><span><strong>Ngày sinh:&nbsp;</strong>20/10/2024</span></EuiText>
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
            <EuiFlexGroup>
                <EuiFlexItem>
                    <EuiFlexGroup direction='column' gutterSize='none'>
                        <EuiFlexItem grow={false} style={{paddingBlock:'10px'}}>
                            <EuiFlexGroup>
                                <EuiText size='s'>Điểm tổng kết:<b>10</b></EuiText>
                                <EuiText size='s'>Hạnh kiểm:<b>Tốt</b></EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiHorizontalRule margin='none'/>
                            <EuiBasicTable
                            columns={column1}
                            items={itemOfPages}
                            onChange={onChange}
                            pagination={paginations}/>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup direction='column'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup direction='column' gutterSize='none'>
                                <EuiFlexItem grow={false} style={{paddingBlock:'10px'}}>
                                    <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
                                        <EuiText size='s'><b>Tổng kết</b></EuiText>
                                        <EuiLink sizes>Chỉnh sửa</EuiLink>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                                <EuiHorizontalRule margin='none'/>
                                <EuiBasicTable
                                columns={column2}
                                items={item2}/>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup direction='column'>
                                <EuiHealth><strong>Chứng chỉ nghề phổ thông</strong></EuiHealth>
                                <EuiHealth><strong>Giải thưởng tron kì thi cấp huyện trở lên</strong></EuiHealth>
                                <EuiHealth><strong>Khen thưởng đặc biệt khác</strong></EuiHealth>
                                <EuiFormRow label={<EuiText size='s'><strong>Nhận xét của giáo viên chủ nhiệm</strong></EuiText>} fullWidth>
                                <EuiTextArea placeholder='' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup gutterSize='s' justifyContent='flexEnd'>
                <EuiButton>Lưu</EuiButton>
                <EuiButton fill onClick={()=>setModalConfirm(true)}>Gửi</EuiButton>
            </EuiFlexGroup>
      </EuiPageTemplate.Section>
      {confirm}
    </EuiPageTemplate>
  )
}
