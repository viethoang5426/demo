import {Routes,BrowserRouter,Route, Outlet} from "react-router-dom"
import Login from '../src/Pages/Login'
import Home from "./Pages/Home";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import AccountManagement from "./Pages/AccountManagement";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
  <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Nested/>}>
          <Route path="quanlytaikhoan" element={<AccountManagement/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}
function Nested() {
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
