
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/login/Signup";
import Home from "./components/Home/Home";
import Navbar from "./layout/header/Navbar";
import Login from './components/login/Login';
import Dulceria from './components/dulceria/Dulceria'
import ModalBienvenida from "./components/Home/modal/Modal";
import ProtectedRoute from './components/ProtecedRoute'
import { useUserAuth } from "./context/authContext";

function App() {
  const { user } = useUserAuth();
  if (user === false) {
    return <p>Loading ....</p>
  }
  return (
    <>
      <Navbar></Navbar>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/dulceria" element={
               <ProtectedRoute>
                  <Dulceria/>
              </ProtectedRoute>
               } />
            <Route path="/modal" element={ <ModalBienvenida/>} />
      </Routes>
    </>
  );
}

export default App;
