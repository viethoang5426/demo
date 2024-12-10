import React, { useState } from 'react'
import { EuiButton, EuiCheckbox, EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiIcon, EuiImage, EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTextColor} from '@elastic/eui'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({
      email:"",
      password:""
    })

    const handleLogin=async()=>{
      let validationErrors  = {};
      if(!email){
         validationErrors.email = "Email không được để trống";
      }
      const re = /^[^\s@]{5,}@[^\s@]+\.[^\s@]{2,}$/;
      if (!re.test(String(email).toLowerCase())) {
        validationErrors.email = "Email sai định dạng";
      }
      if(!password){
        validationErrors.password = "Mật khẩu không được để trống";
      }
      setErrors(validationErrors)
      if (Object.keys(validationErrors).length === 0) {
        try {
          const res=await axios.post('http://localhost:5000/login',{
            email:email,
            password:password
          })
          localStorage.setItem('user',JSON.stringify(res.data.token))
          toast.success('Đăng nhập thành công')
        } catch (err) {
          if(err.response&&err.response.status===400){
            toast.error(err.response.data)
          }
          console.log(err)
        }
      }
    }
  return (
    <div style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <ToastContainer/>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%'}}>
        <EuiPanel grow={false} style={{position:'absolute',left:'22px',top:'11px'}}>
              <EuiImage src='/assets/logo.png' size="s"/>
          </EuiPanel>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "4rem", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                      <EuiFlexItem>
                        <EuiText textAlign='center' style={{fontSize:'24px'}}>
                          <b>Đăng nhập</b>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Email/ Số điện thoại" fullWidth isInvalid={!!errors.email} error={errors.email}>
                          <EuiFieldText placeholder='Nhập email/ Số điện thoại của bạn...' fullWidth onChange={(e)=>setEmail(e.target.value)} isInvalid={!!errors.email}/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Mật khẩu" fullWidth isInvalid={!!errors.password} error={errors.password}>
                            <EuiFieldPassword type='dual' placeholder='Password' fullWidth onChange={(e)=>setPassword(e.target.value)} isInvalid={!!errors.password}/>
                        </EuiFormRow>
                        <EuiSpacer size='xs'/>
                        <EuiFlexGroup justifyContent='spaceBetween' alignItems="center" responsive={false}>
                          <EuiFlexItem grow={true}>
                            <EuiCheckbox checked id='1' label={<span style={{fontSize:'12px'}}>Ghi nhớ đăng nhập</span>}/>
                          </EuiFlexItem>
                          <EuiFlexItem grow={false}>
                            <EuiLink href='' color='subdued' style={{fontSize:'12px'}}>Quên mật khẩu?</EuiLink>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column'>
                          <EuiFlexItem>
                            <EuiButton fill onClick={handleLogin} style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Đăng nhập</EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <EuiText style={{display:'flex',justifyContent:'center', gap:5}}>
                              <strong>Chưa có tài khoản?</strong>
                              <EuiLink href='/register'>Tạo tài khoản mới</EuiLink>
                            </EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
    </div>
  )
}
