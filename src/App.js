import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import LoginForm from "./components/loginPage";
import User from "./components/user";
import Cookies from "js-cookie";
function App() {
  const name = Cookies.get('name')
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/" element ={name === undefined ? <LoginForm/> : <User/> }/>
          console.log(name)
        </Routes>
      </BrowserRouter>
  )
}

export default App;
