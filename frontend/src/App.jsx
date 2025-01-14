import {Routes,BrowserRouter,Route, Outlet} from "react-router-dom"
import Login from './Pages/danhnhap/Login'
import ForgetPassword from "./Pages/danhnhap/ForgetPassword";
import ResetPassword from "./Pages/danhnhap/ResetPassword";
import AccountManagement from "./Pages/quanlytaikhoan/AccountManagement";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactBookView from "./Pages/solienlacdientu/ContactBookView";
import ContactBookEdit from "./Pages/solienlacdientu/ContactBookEdit";
import StudentTranscript from "./Pages/hocbahocsinh/StudentTranscript";
import StudentTranscriptView from "./Pages/hocbahocsinh/StudentTranscriptView";
import SchoolDetail from "./Pages/chitiettruonghoc/SchoolDetail";
import ListTeacher_Admin from "./Pages/danhsachgiaovien/ListTeacher_Admin";
import ListTeacher_Other from "./Pages/danhsachgiaovien/ListTeacher_Other";
import TeacherDetail from "./Pages/chitietgiaovien/TeacherDetail";
import ListSchool from "./Pages/danhsachtruonghoc/ListSchool";
import ListStudent from "./Pages/danhsachhocsinh/ListStudent";
import ClassManagement from "./Pages/quanlylophoc/ClassManagement";
import ListEvent from "./Pages/danhsachsukien/ListEvent";
import ListNotification from "./Pages/danhsachthongbao/ListNotification";
import NotificationDetail from "./Pages/danhsachthongbao/NotificationDetail";
import AddTimetable from "./Pages/thoikhoabieu/AddTimetable";
import Attendance from "./Pages/diemdanh/Attendance";
import AttendanceAI from "./Pages/diemdanh/AttendanceAI";
import ScoreBoard from "./Pages/bangdiem/ScoreBoard";
import ClassRecordBook from "./Pages/sodaubai/ClassRecordBook";
import Debt from "./Pages/quanlycongno/Debt";
import TuitionManagement from "./Pages/quanlyhocphi/TuitionManagement";
import MyTuition from "./Pages/quanlyhocphi/MyTuition";
import SchoolAdmin from "./Pages/trangchu/SchoolAdmin";
import SchoolAdminSideBar from "./Components/Sidebar/SchoolAdminSideBar";
import { EuiPageTemplate } from "@elastic/eui";
import { useState } from "react";
import SuperAdmin from "./Pages/trangchu/SuperAdmin";
import TeacherHome from "./Pages/trangchu/TeacherHome";
import StudentHome from "./Pages/trangchu/StudentHome";
import ClassTuition from "./Pages/quanlyhocphi/ClassTuition";
import TeachingClass from "./Pages/lopgiangday/TeachingClass";

function App() {
  return (
  <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Nested/>}>
          <Route index element={<StudentHome/>}/>
          <Route path="quanlytaikhoan" element={<AccountManagement/>}/>
          <Route path="solienlacdientu" element={<ContactBookView/>}/>
          <Route path="chinhsua_solienlacdientu" element={<ContactBookEdit/>}/>
          <Route path="hocbahocsinh" element={<StudentTranscript/>}/>
          <Route path="ketquahoctap" element={<StudentTranscriptView/>}/>
          <Route path="chitiettruonghoc" element={<SchoolDetail/>}/>
          <Route path="danhsachgiaovien_Admin" element={<ListTeacher_Admin/>}/>
          <Route path="danhsachgiaovien_Other" element={<ListTeacher_Other/>}/>
          <Route path="chitietgiaovien" element={<TeacherDetail/>}/>
          <Route path="danhsachtruonghoc" element={<ListSchool/>}/>
          <Route path="danhsachhocsinh" element={<ListStudent/>}/>
          <Route path="quanlylophoc" element={<ClassManagement/>}/>
          <Route path="danhsachsukien" element={<ListEvent/>}/>
          <Route path="danhsachthongbao" element={<ListNotification/>}/>
          <Route path="chitietthongbao" element={<NotificationDetail/>}/>
          <Route path="taomoithoikhoabieu" element={<AddTimetable/>}/>
          <Route path="diemdanh" element={<Attendance/>}/>
          <Route path="diemdanhAI" element={<AttendanceAI/>}/>
          <Route path="bangdiem" element={<ScoreBoard/>}/>
          <Route path="sodaubai" element={<ClassRecordBook/>}/>
          <Route path="quanlycongno" element={<Debt/>}/>
          <Route path="quanlyhocphi" element={<TuitionManagement/>}/>
          <Route path="hocphicuatoi" element={<MyTuition/>}/>
          <Route path="quantritruonghoc" element={<SchoolAdmin/>}/>
          <Route path="trangchuadmin" element={<SuperAdmin/>}/>
          <Route path="trangchugiaovien" element={<TeacherHome/>}/>
          {/* <Route path="trangchuhocsinh" element={<StudentHome/>}/> */}
          <Route path="hocphilopchunhiem" element={<ClassTuition/>}/>
          <Route path="lopgiangday" element={<TeachingClass/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}
function Nested() {
  const [isSideBar,setIsSideBar]=useState(false)
  const clickSideBar = () => setIsSideBar(!isSideBar); 
  return(
    <>
    <EuiPageTemplate>
        <Header clickSideBar={clickSideBar}/>
        {isSideBar&&<EuiPageTemplate.Sidebar>
          <SchoolAdminSideBar/>
        </EuiPageTemplate.Sidebar>}
          <Outlet/>
          <Footer/>
      </EuiPageTemplate>
      </>
  )
}

export default App;
