import { EuiAvatar, EuiButton, EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHeader, EuiHeaderLogo, EuiImage, EuiLink, EuiPage, EuiPanel, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function Register() {
    


  return (
    <EuiPage style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',minHeight:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',minHeight:'100%', position:'relative'}}>
        <EuiPanel grow={false} style={{position:'absolute',left:'22px',top:'11px'}}>
            <EuiImage src='/assets/logo.png' size="s"/>
        </EuiPanel>
        <EuiFlexItem grow={false}>
        <EuiPanel style={{padding: "2rem 4rem", borderRadius: "24px"}}>
            <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                <EuiFlexItem>
                    <EuiText textAlign='center' style={{fontSize:'24px'}}>
                        <b>Đăng ký tài khoản</b>
                    </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Email" fullWidth>
                        <EuiFieldText placeholder='ecotel@gmail.com' fullWidth isInvalid/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Tên đăng nhập" fullWidth>
                        <EuiFieldText placeholder='ecotel@gmail.com' fullWidth isInvalid/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Mật khẩu" fullWidth>
                        <EuiFieldPassword type='dual' placeholder='Password' fullWidth isInvalid/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Nhập lại mật khẩu" fullWidth>
                        <EuiFieldPassword type='dual' placeholder='Password' fullWidth isInvalid/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                <EuiFlexGroup direction='column'>
                    <EuiFlexItem>
                        <EuiButton fill style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Đăng ký</EuiButton>
                    </EuiFlexItem>
                    <EuiFlexItem>
                    <EuiText style={{display:'flex',justifyContent:'center', gap:5}}>
                        <strong>Đã có tài khoản?</strong>
                        <EuiLink href='/'>Đăng nhập</EuiLink>
                    </EuiText>
                    </EuiFlexItem>
                </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  )
}
