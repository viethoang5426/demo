import { EuiButton, EuiButtonEmpty, EuiDatePicker, EuiFieldPassword, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect } from '@elastic/eui'
import moment, { Moment } from 'moment'
import React, { Dispatch, SetStateAction, useState } from 'react'
import axios, { AxiosError } from 'axios'
import {toast,ToastContainer} from 'react-toastify'

type AddAccountteacherProps = {
    setModalAddAccount: Dispatch<SetStateAction<boolean>>;
};
type Errors={
    nameUser:string,
    nameSchool:string,
    email:string,
    phone:string,
    birthday:string,
    gender:string,
    password:string,
    reEnterPassword:string,
}
export default function AddAcountTeacher({setModalAddAccount}:AddAccountteacherProps) {
    const [birthday,setBirthday]=useState<Moment>(moment())
    const [nameUser,setNameUser]=useState("")
    const [nameSchool,setNameSchool]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")
    const [reEnterPassword,setReEnterPassword]=useState("")


    const [errors,setErrors]=useState<Errors>({
        nameUser:"",
        nameSchool:"",
        email:"",
        phone:"",
        birthday:"",
        gender:"",
        password:"",
        reEnterPassword:""
    })

    const handleCreateAccount=async()=>{
        let valid :Errors={
            nameUser:"",
            nameSchool:"",
            email:"",
            phone:"",
            birthday:"",
            gender:"",
            password:"",
            reEnterPassword:""
        };
        if(!nameUser){
            valid.nameUser="Nhập họ tên người dùng"
        }
        if(!nameSchool){
            valid.nameSchool="Chọn trường học"
        }
        if(!email){
            valid.email="Nhập địa chỉ email"
        }else{
            const re = /^[^\s@]{5,}@[^\s@]+\.[^\s@]{2,}$/;
            if (!re.test(String(email).toLowerCase())) {
                valid.email = "Email sai định dạng";
            }
        }
        if(!phone){
            valid.phone="Nhập số điện thoại"
        }else{
            const regexPhone=/(84|0[3|5|7|8|9])+([0-9]{8})\b/
            if(!regexPhone.test(phone)){
                valid.phone='Số điện thoại không đúng định dạng'
            }
        }
        if(!gender){
            valid.gender="Chọn giới tính"
        }
        if(!password){
            valid.password="Nhập mật khẩu"
        }
        if(!reEnterPassword){
            valid.reEnterPassword="Nhập lại mật khẩu"
        }else if(reEnterPassword !== password){
            valid.reEnterPassword="Mật khẩu nhập lại không khớp"
        }
        setErrors(valid)
        if(Object.keys(valid).length===0){
            try {
                await axios.post("http://localhost:5000/signup",{
                    user:nameUser,
                    password:password,
                    email:email,
                    schoolName:nameSchool,
                    phone:phone,
                    dateBirth:birthday,
                    sex:gender
                })
                toast.success("Tạo tài khoản thành công")
            } catch (err) {
                if(err instanceof AxiosError && err.response&&err.response.data.errors){
                    setErrors(err.response.data.errors)
                }
                toast.error("Thất bại")
                console.log(err)
            }
        }
        
    }
  return (
    <EuiModal style={{width:'44rem'}} onClose={()=>setModalAddAccount(false)}>
        <ToastContainer/>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
            <h4>Tạo mới tài khoản- Giáo viên</h4>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
        <EuiModalBody>
            <EuiFlexGrid columns={2}>
                <EuiFlexItem>
                    <EuiFormRow label="Họ và tên người dùng" isInvalid={!!errors.nameUser} error={errors.nameUser} fullWidth>
                        <EuiFieldText placeholder="Lê Chí Tuyền" onChange={e=>setNameUser(e.target.value)} isInvalid={!!errors.nameUser}  fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem >
                    <EuiFormRow label="Trường học" isInvalid={!!errors.nameSchool} error={errors.nameSchool} fullWidth>
                        <EuiSelect options={[
                            {value:"",text:"Trường học"},
                            {value:"THPT Bách Khoa",text:"THPT Bách Khoa"}
                        ]} onChange={e=>setNameSchool(e.target.value)} isInvalid={!!errors.nameSchool} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Email" isInvalid={!!errors.email} error={errors.email} fullWidth>
                        <EuiFieldText placeholder="lechituyen@gmail.com" onChange={e=>setEmail(e.target.value)} isInvalid={!!errors.email} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Số điện thoại liên lạc" isInvalid={!!errors.phone} error={errors.phone} fullWidth>
                        <EuiFieldText placeholder="0283929393" isInvalid={!!errors.phone} onChange={e=>setPhone(e.target.value)} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Ngày sinh" isInvalid={!!errors.birthday} error={errors.birthday} fullWidth>
                        <EuiDatePicker selected={birthday} onChange={(date)=>{if (date) setBirthday(date)}} isInvalid={!!errors.birthday} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Giới tính" isInvalid={!!errors.gender} error={errors.gender} fullWidth>
                        <EuiSelect options={[
                            {value:"",text:"Chọn giới tính"},
                            {value:"Nam",text:"Nam"},
                            {value:"Nữ",text:"Nữ"},
                        ]} onChange={e=>setGender(e.target.value)} isInvalid={!!errors.gender} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Mật khẩu" isInvalid={!!errors.password} error={errors.password} fullWidth>
                        <EuiFieldPassword type='dual' onChange={e=>setPassword(e.target.value)} isInvalid={!!errors.password} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFormRow label="Nhập lại mật khẩu" isInvalid={!!errors.reEnterPassword} error={errors.reEnterPassword} fullWidth>
                        <EuiFieldPassword type='dual' onChange={e=>setReEnterPassword(e.target.value)} isInvalid={!!errors.reEnterPassword} fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGrid>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiFlexGroup justifyContent='flexEnd'>
                <EuiButtonEmpty onClick={()=>setModalAddAccount(false)}>Hủy</EuiButtonEmpty>
                <EuiButton fill onClick={handleCreateAccount}>Tạo mới tài khoản</EuiButton>
            </EuiFlexGroup>
        </EuiModalFooter>
    </EuiModal>
  )
}
