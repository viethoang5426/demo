import { EuiButton, EuiFlexGroup, EuiPage, EuiPanel, EuiText ,EuiFlexItem, EuiFormRow, EuiFieldText, EuiLink, EuiImage, EuiConfirmModal, EuiTextColor, EuiSpacer, EuiToast, EuiGlobalToastList} from '@elastic/eui'
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from "react-toastify"
import Confirm from '../Components/Confirm';

export default function ForgetPassword() {
    const [isModalVisible,setIsModalVisible]=useState(false)
    const handleSendCode = () => {
      setIsModalVisible(true)
  };
    

  return (
    <EuiPage style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%',position:'relative'}}>
            <EuiPanel grow={false} style={{position:'absolute',left:'22px',top:'11px'}}>
                <EuiImage src='/assets/logo.png' size="s"/>
            </EuiPanel>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "4rem", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                      <EuiFlexItem>
                        <EuiText textAlign='center' style={{fontSize:'24px'}}>
                          <b>Quên mật khẩu</b>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Email" fullWidth>
                          <EuiFieldText placeholder='ecotel@gmail.com' fullWidth/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                          <EuiFlexItem>
                            <EuiButton fill onClick={handleSendCode} style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Gửi mã xác nhận</EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem>
                              <EuiText textAlign='center'><EuiLink href=''>Đăng nhập</EuiLink></EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
       {isModalVisible&&<Confirm setIsModalVisible={setIsModalVisible}/>}
       <EuiLink style={{position:'absolute',bottom:0,right:0,padding:'5px'}}><EuiText color='white'>ecotel.com.vn</EuiText></EuiLink>
    </EuiPage>
  )
}