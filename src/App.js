import { UserAuthContextProvider } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/login/Signup";
import Home from "./components/Home/Home";
import Navbar from "./layout/header/Navbar";
import Login from './components/login/Login';
import Dulceria from './components/dulceria/Dulceria'
import ModalBienvenida from "./components/Home/modal/Modal";
function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Navbar></Navbar>
      <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/dulceria" element={ <Dulceria/>} />
            <Route path="/modal" element={ <ModalBienvenida/>} />
      </Routes>
     </UserAuthContextProvider>
    </>
  );
}

export default App;
