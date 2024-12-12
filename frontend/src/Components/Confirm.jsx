import { EuiConfirmModal, EuiFieldText,EuiButton, EuiFlexGroup, EuiLink, EuiSpacer, EuiText, EuiToast, EuiFormRow } from '@elastic/eui'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Confirm({setIsModalVisible,email}) {
    const [countdown, setCountdown] = useState(60);
    const [otp,setOtp]=useState("")
    useEffect(()=>{
        if(countdown>0)
        {
            const timer=setTimeout(() => {
                setCountdown(countdown-1)
            }, 1000);
            return ()=>clearTimeout(timer)
        }else if(countdown===0){
            closeModal()
        }
    },[countdown])

    const closeModal = () => setIsModalVisible(false);

    const [isToast,setIsToast]=useState(false)
    let toast;
    if(isToast){
        toast=(
            <div style={{position:'absolute',right:0,top:0,zIndex:10000}}>
            <EuiToast
                title="Mã xác nhận không chính xác"
                color="warning"
                iconType="warning"
            >
                <EuiText size='s'>Vui lòng kiểm tra hoặc gửi lại mã</EuiText>
                <EuiSpacer size='xs'/>
                <EuiFlexGroup justifyContent='flexEnd'>
                    <EuiButton color='danger' onClick={()=>setIsToast(false)}>Đóng</EuiButton>
                </EuiFlexGroup>
            </EuiToast>
         </div>
        )
    }
    const confirm=async()=>{
        try {
            const res=await axios.post('http://localhost:5000/verifyotp',{
                email:email,
                otp:otp
            })
            window.location.href=res.data
        } catch (err) {
            setIsToast(true)
            console.log(err)
        }
    }


    const maskPhoneNumber=(phone)=> {
        if (phone.length < 10) return phone;
        return phone.slice(0, 5) + '****' + phone.slice(-1);
      }
      const maskEmail=(email)=> {
        const [username, domain] = email.split('@');
        return `${username.slice(0, 1)}**${username.slice(username.length-3,username.length)}@${domain}`;
      }
  return (
    <>
    {toast}
    <EuiConfirmModal 
    style={{width:600}}
    title="Mã xác nhận"
    onCancel={closeModal}
    onConfirm={confirm}
    cancelButtonText="Gửi lại"
    confirmButtonText="Xác nhận"
    defaultFocusedButton='confirm'>
        <EuiFlexGroup direction='column' gutterSize='none'>
            <EuiText size='s'>Nhập mã xác nhận được gửi về email&nbsp; <EuiLink>{maskEmail(email)}</EuiLink></EuiText>
            <EuiText size='s'>Không thể đăng nhập email? Nhận mã xác nhận qua số điện thoại:&nbsp;<EuiLink>{maskPhoneNumber("0983747329")}</EuiLink></EuiText>
        </EuiFlexGroup>
        <EuiSpacer/>
        <EuiFormRow fullWidth>
            <EuiFieldText append={<EuiText>{countdown}s</EuiText>} style={{outline:'none'}} onChange={(e)=>setOtp(e.target.value)} fullWidth/>
        </EuiFormRow>        
    </EuiConfirmModal>
    </>
  )
}
