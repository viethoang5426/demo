import { EuiBasicTable, EuiButtonIcon, EuiFlexGroup } from '@elastic/eui'
import React, { Fragment, useState } from 'react'

export default function ListSubject() {
    const columns=[
        {field:"name",name:"Phòng ban"},
        {field:"action",name:"Thao tác",
            render:()=>(
                <EuiFlexGroup gutterSize='s'>
                    <EuiButtonIcon iconType="indexEdit" color='success'/>
                    <EuiButtonIcon iconType="trash" color='danger'/>
                </EuiFlexGroup>
            ),
            width:'100px'
        },

    ]
    const items=[
        {name:"Ban giám hiệu"},
        {name:"Giáo vụ"},
        {name:"Tài chính"},
        {name:"4"},
        {name:"5"},
        {name:"6"},
        {name:"7"},
        {name:"8"},
        {name:"9"},
        {name:"10"},
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
    <Fragment>
        <EuiBasicTable
        columns={columns}
        items={itemOfPages}
        onChange={onChange}
        pagination={pagination}/>
    </Fragment>
  )
}
