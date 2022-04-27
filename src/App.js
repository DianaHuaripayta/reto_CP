import { UserAuthContextProvider } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/login/Signup";
import Home from "./components/Home/Home";
import Navbar from "./layout/header/Navbar";
function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Navbar></Navbar>
      <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="/home" element={ <Home/>} />
      </Routes>
     </UserAuthContextProvider>
    </>
  );
}

export default App;
