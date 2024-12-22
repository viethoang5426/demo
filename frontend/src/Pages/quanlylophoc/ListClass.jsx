import { EuiBasicTable, EuiButtonIcon, EuiFlexGroup } from '@elastic/eui'
import React, { Fragment, useState } from 'react'

export default function ListClass() {
    const columns=[
        {field:"name",name:"Lớp"},
        {field:"teacher",name:"Giáo viên chủ nhiệm"},
        {field:"room",name:"Phòng học cố định"},
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
        {name:"10A1",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A2",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A3",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A4",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A5",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A6",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A7",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A8",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A9",teacher:"Lê Chí Tuyền",room:"D3-102"},
        {name:"10A10",teacher:"Lê Chí Tuyền",room:"D3-102"},
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
