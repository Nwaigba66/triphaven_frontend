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
import {Review }from "./components/Review/Review";
import { Booking } from "./components/Booking/Booking";
import "./components/Footer/Footer.css";
import "./components/NavBar/NavBar.css";
import "./components/Login/Login.css";
import "./components/Signup/Signup.css";
import "./components/Booking/Booking.css";
import "./components/Dashboard/Dashboard.css";
import { About } from "./components/About/About";
import "./components/About/About.css";
import { UpdateForm } from "./components/DetailPage/UpdateForm";
import "./components/DetailPage/Update.css";
import "./components/Review/review.css";




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
        <Route path="/about" element={<About />} />
        <Route path="/update" element={<UpdateForm />} />

        </Routes> 
        <Footer />
    </>
  )
}

export default App
