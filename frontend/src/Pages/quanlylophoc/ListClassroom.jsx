import { EuiBasicTable, EuiButtonIcon, EuiFlexGroup } from '@elastic/eui'
import React, { Fragment, useState } from 'react'

export default function ListClassroom() {
    const columns=[
        {field:"name",name:"Phòng học"},
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
        {name:"D1-101"},
        {name:"D1-102"},
        {name:"D1-103"},
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
