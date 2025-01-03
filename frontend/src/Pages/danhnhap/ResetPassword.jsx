import React, { useContext, useEffect, useState } from 'react'
import { EuiButton, EuiCheckbox, EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiIcon, EuiImage, EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTextColor, EuiToast} from '@elastic/eui'
import {useNavigate,useLocation} from 'react-router-dom'
import {jwtDecode} from "jwt-decode";
import axios from 'axios'

export default function ResetPassword() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [reEnterPassword,setReEnterPassword]=useState("")

    const [errors,setErrors]=useState({
        password:"",
        ReEnterPassword:""
    })

    const [isToast,setIsToast]=useState(false)
    let toast;
    if(isToast){
        toast=(
            <div style={{position:'absolute',right:0,top:0,zIndex:10000}}>
            <EuiToast
                title="Đặt mật khẩu mới thành công"
                color="success"
                iconType="faceHappy"
            >
                <EuiText size='s'>Bạn sẽ được chuyển tới trang đăng nhập</EuiText>
            </EuiToast>
         </div>
        )
    }
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');
      if(token){
        const decoded = jwtDecode(token);
        setEmail(decoded.email)
      }
  }, [location.search]);
    const confirm=async()=>{
      let valid={}
      if(!password){
        valid.password="Nhập mật khẩu mới"
      }
      if(!reEnterPassword){
        valid.ReEnterPassword="Nhập lại mật khẩu mới"
      }else if(password!==reEnterPassword){
        valid.ReEnterPassword="Mật khẩu nhập lại không khớp"
      }
      setErrors(valid)
      if(Object.keys(valid).length===0){
        try {
          await axios.post("http://192.168.100.35:5000/changepassword",{
            email:email,
            newPassword:reEnterPassword
          })
          setIsToast(true)
          setTimeout(()=>{
            navigate("/login")
          },3000)
        } catch (err) {
          console.log(err)
        }
      }
    }

  return (
    <div style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%'}}>
        <EuiPanel grow={false} style={{position:'absolute',left:'22px',top:'11px'}}>
              <EuiImage src='/assets/logo.png' size="s"/>
          </EuiPanel>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "4rem", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                      <EuiFlexItem>
                        <EuiText textAlign='center' style={{fontSize:'24px'}}>
                          <b>Đặt lại mật khẩu</b>
                        </EuiText>
                        <EuiText textAlign='center' size='s'>Đổi mật khẩu mới cho tài khoản <EuiLink>{email}</EuiLink></EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                      <EuiFormRow label="Mật khẩu mới" fullWidth isInvalid={!!errors.password} error={errors.password}>
                            <EuiFieldPassword type='dual' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} fullWidth isInvalid={!!errors.password}/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Nhập lại mật khẩu mới" fullWidth isInvalid={!!errors.ReEnterPassword} error={errors.ReEnterPassword}>
                            <EuiFieldPassword type='dual' placeholder='ReEnterPassword' onChange={(e)=>setReEnterPassword(e.target.value)} fullWidth isInvalid={!!errors.ReEnterPassword}/>
                        </EuiFormRow>
                        <EuiSpacer size='xs'/>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiButton fill onClick={confirm}>Xác nhận</EuiButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
       {toast}
       <EuiLink style={{position:'absolute',bottom:0,right:0,padding:'5px'}}><EuiText color='white'>ecotel.com.vn</EuiText></EuiLink>
    </div>
  )
}
