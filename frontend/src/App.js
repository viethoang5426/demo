import {Routes,BrowserRouter,Route} from "react-router-dom"
import Login from '../src/Pages/Login'
import Register from "./Pages/Register";
function App() {
  return (
  <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
