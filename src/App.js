import SignUp from "./pages/login/Signup";
import Home from "./pages/Home/Home";
import Navbar from "./layout/header/Navbar";
import Login from './pages/login/Login';
// import Dulceria from './pages/dulceria/Dulceria'
import ProtectedRoute from './components/ProtecedRoute'
import ProgressCircular from './components/Progress'
import theme from "./styles/theme";
import NotFound from "./pages/notFound/notFound";

import { useUserAuth } from "./context/authContext";
import {  ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import { CandyStore } from "./pages/candyStore/CandyStore";

function App() {
  const { user } = useUserAuth();
  if (user === false) {
    return <ProgressCircular/>
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
                    <CandyStore/>
                </ProtectedRoute>
                } />
               <Route path="*" element={ <NotFound/>} />
        </Routes>
     </ThemeProvider>
    </>
  );
}

export default App;
