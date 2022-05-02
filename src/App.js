
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/login/Signup";
import Home from "./pages/Home/Home";
import Navbar from "./layout/header/Navbar";
import Login from './pages/login/Login';
import Dulceria from './pages/dulceria/Dulceria'
import ModalBienvenida from "./pages/Home/modal/Modal";
import ProtectedRoute from './components/ProtecedRoute'
import { useUserAuth } from "./context/authContext";
import {  ThemeProvider } from '@mui/material/styles';
import theme from "./styles/theme";

function App() {
  const { user } = useUserAuth();
  if (user === false) {
    return <p>Loading ....</p>
  }
  return (
    <>
     <ThemeProvider theme={theme}>
      <Navbar/>
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
     </ThemeProvider>
    </>
  );
}

export default App;
