import React, { useState } from 'react'
import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiCheckbox, EuiConfirmModal, EuiDatePicker, EuiDatePickerRange, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiIcon, EuiImage, EuiLink, EuiPageTemplate, EuiPagination, EuiPopover, EuiSelectable, EuiSpacer, EuiTablePagination, EuiText, EuiTextAlign, EuiTextArea } from "@elastic/eui"
import moment from 'moment'
import RatingPopover from './RatingPopover'

export default function ClassRecordBook() {
    const [startDate,setStartDate]=useState(moment())
    const [endDate,setEndDate]=useState(moment())

    const columns=[
        {field:'rank',name:'Thứ'},
        {field:'date',name:'Ngày',},
        {field:'period',name:"Tiết"},
        {field:'lesson',name:"Tiết theo chương trình"},
        {field:'subject',name:"Môn học"},
        {field:'absent',name:'Số học sinh vắng'},
        {field:'teacher',name:"Giáo viên",},
        {field:'content',name:"Tên bài/ Nội dung",},
        {field:'comment',name:"Nhận xét của giáo viên",},
        {field:'rating',name:"Xếp loại",
            render:(item)=>(
                <RatingPopover
                selected={item.rating}
                onRatingChange={(newRating) =>updateRating(item.id,newRating)}
              />
            )
        },
        {field:"action",name:"",
            render:()=>(
                <EuiButtonIcon iconType="arrowUp"/>
            ),
            width:"50px"
        }

    ]
    const [data, setData] = useState([
        { id: 1, rank: 2, date: '18/11/2024', period: 1, lesson: 1, subject: "Chào cờ", absent: 10, teacher: "Lê Chí Tuyền", content: "10", comment: "10/20", rating: "Tốt" },
        { id: 2, rank: 2, date: '18/11/2024', period: 1, lesson: 1, subject: "Chào cờ", absent: 10, teacher: "Lê Chí Tuyền", content: "10", comment: "10/20", rating: "Tốt" },
        { id: 3, rank: 2, date: '18/11/2024', period: 1, lesson: 1, subject: "Chào cờ", absent: 10, teacher: "Lê Chí Tuyền", content: "10", comment: "10/20", rating: "Tốt" },
        { id: 4, rank: 2, date: '18/11/2024', period: 1, lesson: 1, subject: "Chào cờ", absent: 10, teacher: "Lê Chí Tuyền", content: "10", comment: "10/20", rating: "Tốt" },
    ]);
    const items=data.map(item=>(
        { id: item.id, rank: item.rank, date: item.date, period: item.period, lesson: item.lesson, subject: item.subject, absent: item.absent, teacher: item.teacher, content: item.content, comment: item.comment, rating: item }
    ))
    const updateRating = (id, newRating) => {
        setData((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, rating: newRating } : item
            )
        );
    };

    const column2=[
        {field:"",name:"",
            render:()=>(
                <EuiCheckbox/>
            ),
            width:"30px"
        },
        {field:"name",name:"Tên"},
        {field:"absent",name:"Nghỉ phép",
            render:(item)=>(
                <EuiHealth color='success'>{item}</EuiHealth>
            )
        },
    ]
    const item2=[
        {name:"Lê Chí Tuyền",absent:"Có phép"},
        {name:"Lê Chí Tuyền",absent:"Có phép"},
        {name:"Lê Chí Tuyền",absent:"Có phép"},
    ]


  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup gutterSize='s' alignItems='center'>
                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                    <EuiText><h2>Sổ đầu bài: Lớp 12A12</h2></EuiText>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem>
                        <EuiFlexGroup alignItems='center'>
                            <EuiAvatar name='A' imageUrl='/assets/avat.png'/>
                            <EuiText size='s'><b>GVCN:&nbsp;Lê Chí Tuyền</b></EuiText>
                            <EuiText size='s'><b>Tổng số học sinh:&nbsp;</b>40</EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexGroup gutterSize='s' alignItems='center'>
                                <EuiDatePickerRange
                                startDateControl={<EuiDatePicker selected={startDate} onChange={(date)=>setStartDate(date)}/>}
                                endDateControl={<EuiDatePicker selected={endDate} onChange={(date)=>setEndDate(date)}/>}/>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' size='s' iconSize='s'>Học kỳ: I</EuiButtonEmpty>
                            <EuiButtonEmpty iconType="arrowDown" iconSide='right' size='s' iconSize='s'>Năm học: 2024-2025</EuiButtonEmpty>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlock:0}}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section contentProps={{style:{paddingBlockStart:0}}}>
            <EuiSpacer size='s'/>
            <EuiText size='s'>Tuần học: 10</EuiText>
            <EuiSpacer size='s'/>
            <EuiHorizontalRule margin='none'/>
            <EuiBasicTable 
                tableLayout='auto'
                columns={columns}
                items={items}
                itemId="id"
                />
            <EuiSpacer size='s'/>
            <EuiFlexGroup direction='column' gutterSize='s' style={{background:"#FAFBFD"}}>
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiText><b>Danh sách học sinh vắng</b></EuiText>
                        <EuiSpacer size='s'/>
                        <EuiBasicTable columns={column2} items={item2}/>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label={<b>Nhận xét của giáo viên</b>}>
                            <EuiTextArea placeholder='Lớp tiếp thu tốt'/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule margin='none'/>
            </EuiFlexGroup>
            <EuiSpacer size='s'/>
            <EuiTablePagination
                aria-label="Table pagination example"
                pageCount={4}
                activePage={0}
                onChangePage={()=>{}}
                itemsPerPage={10}
                onChangeItemsPerPage={()=>{}}
                itemsPerPageOptions={[10, 20, 0]}
                />
            <EuiSpacer/>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButton iconType="plusInCircle">Đặt lại</EuiButton>
                <EuiButton fill iconType="save">Lưu</EuiButton>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
