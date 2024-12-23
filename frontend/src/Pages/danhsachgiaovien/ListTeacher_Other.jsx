import { EuiPageTemplate,EuiFlexGroup,EuiButtonIcon,EuiPopover,EuiFormControlLayout,EuiSelectable,EuiTableSortingType,EuiAvatar,EuiLink,Comparators,EuiText,EuiFlexItem, EuiFormRow,EuiButton,EuiSelect,EuiHorizontalRule, EuiFieldText, EuiBasicTable, EuiFieldSearch, EuiFlexGrid, EuiImage } from '@elastic/eui'
import React, { useState } from 'react'

export default function ListTeacher_Other() {
  const [isPopoverSubject,setIsPopoverSubject]=useState(false)
        const [options, setOptions] = useState([
          {label: 'Toán học',},
          {label: 'Ngữ văn',},
          {label: 'Vật lý',},
          {label: 'Hóa học',}
      ])
      const selectedSubject=options.filter(option=>option.checked==="on")
  return (
    <EuiPageTemplate style={{background:'white'}}>
        <EuiPageTemplate.Header
        bottomBorder={false}
            pageTitle={
                <EuiFlexGroup direction='column'>
                    <EuiFlexGroup gutterSize='s' alignItems='center' responsive={false}>
                        <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                        <EuiText><h2>Giáo viên</h2></EuiText>
                    </EuiFlexGroup>
                    <EuiFlexGroup alignItems='center'>
                            <EuiText><b>Tổng số giáo viên:</b>&nbsp;50</EuiText>
                            <EuiFlexItem grow={2}>
                            <EuiFormRow style={{fontSize:'14px'}} fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo tên giáo viên/ ID giáo viên' fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow fullWidth style={{fontSize:'14px'}}>
                                <EuiSelect
                                options={[
                                    {value:"",label:"Chức vụ"}  
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormRow onClick={()=>setIsPopoverSubject(!isPopoverSubject)} fullWidth style={{fontSize:'14px'}}>
                                <EuiPopover
                                hasArrow={false}
                                panelPaddingSize='s'
                                isOpen={isPopoverSubject}
                                closePopover={()=>setIsPopoverSubject(false)}
                                button={
                                    <EuiFormControlLayout isDropdown>
                                        <EuiFieldText placeholder='Bộ môn' value={selectedSubject[0]?.label} fullWidth/>
                                    </EuiFormControlLayout>
                                    }>
                                <EuiSelectable
                                options={options}
                                singleSelection
                                searchable
                                searchProps={{placeholder:"Tìm kiếm tên bộ môn"}}
                                onChange={(newOptions) => setOptions(newOptions)}>
                                    {(list, search) => (
                                        <>
                                        {search}
                                        {list}
                                        </>
                                    )}
                                </EuiSelectable>
                                </EuiPopover>
                            </EuiFormRow>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexGroup>
            }/>
        <EuiPageTemplate.Section contentProps={{style: { paddingBlock: '0px' },}} grow={false}>
            <EuiHorizontalRule margin='none'/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiFlexGrid style={{gridTemplateColumns:'repeat(6,1fr)'}}>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(item=>(<EuiFlexItem>
                    <EuiImage 
                        src='/assets/profile.jpg' 
                        hasShadow
                        caption={
                            <p>
                                <EuiText textAlign='center' size='s'>Phạm Thị A</EuiText>
                                <EuiText textAlign='center' size='s'><strong>Hiệu trưởng</strong></EuiText>
                            </p>
                        }
                        width="200" height="200"/>
                </EuiFlexItem>))}
            </EuiFlexGrid>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
