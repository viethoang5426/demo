import { EuiButton, EuiFlexGroup, EuiPage, EuiPanel, EuiText ,EuiFlexItem, EuiFormRow, EuiFieldText, EuiLink, EuiImage, EuiConfirmModal, EuiTextColor, EuiSpacer, EuiToast, EuiGlobalToastList} from '@elastic/eui'
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from "react-toastify"
import Confirm from '../../Components/Confirm';
import axios from 'axios'

export default function ForgetPassword() {
    const [isModalVisible,setIsModalVisible]=useState(false)
    const [email,setEmail]=useState("")

    const handleSendCode=async()=>{
      try {
        await axios.post('http://192.168.100.35:5000/sendotp',{email:email})
        setIsModalVisible(true)
      } catch (err) {
        console.log(err)
      }
    }
    

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
                          <EuiFieldText placeholder='ecotel@gmail.com' onChange={e=>setEmail(e.target.value)} fullWidth/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column' gutterSize='s'>
                          <EuiFlexItem>
                            <EuiButton fill onClick={handleSendCode} style={{borderRadius:'8px',border:'none'}}>Gửi mã xác nhận</EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem>
                              <EuiText textAlign='center'><EuiLink href='/login'>Đăng nhập</EuiLink></EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
       {isModalVisible&&<Confirm setIsModalVisible={setIsModalVisible} email={email}/>}
       <EuiLink style={{position:'absolute',bottom:0,right:0,padding:'5px'}}><EuiText color='white'>ecotel.com.vn</EuiText></EuiLink>
    </EuiPage>
  )
}
