import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { DashboardPage } from "./components/Dashboard/DashboardPage";
import  DetailPage  from "./components/DetailPage/DetailPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFound/Notfound";
import Review from "./components/Review/Review";
import { Booking } from "./components/Booking/Booking";
import "./components/Footer/Footer.css";






function App() {

  const {user, setUser} = useContext(AuthContext);
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route
          path="/home"
          element={<DashboardPage  />}/>
        <Route />
        <Route path={`/dashboard/:roomId`} element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/review" element={<Review />} />
        <Route path="/booking" element={<Booking />} />
        </Routes> 
        <Footer />
    </>
  )
}

export default App
