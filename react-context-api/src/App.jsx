import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { DashboardPage } from "./components/Dashboard/DashboardPage";
import { DetailPage } from "./components/DetailPage/DetailPage";
import { Footer } from "./components/Footer/Footer";




function App() {

  const {user, setUser} = useContext(AuthContext);
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route
          path="/home"
          element={<DashboardPage  />}/>
        <Route />
        <Route path={`/dashboard/:roomId`} element={<DetailPage />} />
        </Routes> 
        <Footer />
    </>
  )
}

export default App
