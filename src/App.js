import { UserAuthContextProvider } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
import LogIn from './components/login/Login';
import SignUp from "./components/login/Signup";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Routes>
            <Route path="/" element={ <LogIn/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="/home" element={ <Home/>} />
      </Routes>
     </UserAuthContextProvider>
    </>
  );
}

export default App;
