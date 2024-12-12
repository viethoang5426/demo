import {Routes,BrowserRouter,Route} from "react-router-dom"
import Login from '../src/Pages/Login'
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
function App() {
  return (
  <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
