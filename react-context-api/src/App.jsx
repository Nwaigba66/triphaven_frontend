import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext";
import { IsProtected } from "./components/IsProtected/IsProtected";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { DashboardPage } from "./components/Dashboard/DashboardPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFound/Notfound";
import { Review }from "./components/Review/Review";
import { Booking } from "./components/Booking/Booking";
import { About } from "./components/About/About";
import { UpdateForm } from "./components/DetailPage/UpdateForm";
import DetailPage from "./components/DetailPage/DetailPage";
import ActivitiesDetails from "./components/Activity/ActivitiesDetail";
import ActivitiesList from "./components/Activity/ActivitiesList";
import ActivityForm from "./components/Activity/ActivityForm";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";

import "./components/PrivacyPolicy/Privacy.css";
import "./components/Footer/Footer.css";
import "./components/NavBar/NavBar.css";
import "./components/Login/Login.css";
import "./components/Signup/Signup.css";
import "./components/Booking/Booking.css";
import "./components/Dashboard/Dashboard.css";
import "./components/About/About.css";
import "./components/Review/review.css";
import "./components/DetailPage/Detail.css";
import "./components/Activity/Activity.css";



function App() {

  // const {user, setUser} = useContext(AuthContext);
 
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" 
      element={
        <IsProtected>
          <Signup />
        </IsProtected>
      } 
      />
      <Route path="/home" 
      element={
        <IsProtected>
      <DashboardPage  />
      </IsProtected>}
      />
      <Route path="/dashboard/:homeId"
       element={
        <IsProtected>
          <DetailPage />
        </IsProtected>
      }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/review"
       element={
        <IsProtected>
          <Review />
        </IsProtected>
       } 
       />
       
      <Route path="/booking"
       element={
       <IsProtected>
        <Booking />
        </IsProtected>
        }
        />
      <Route
          path="/about"
          element={
            <IsProtected>
              <About />
            </IsProtected>
          }
        />
      <Route path="/update" element={<UpdateForm />} />
      <Route
          path="/activity/:activityId"
          element={
            <IsProtected>
              <ActivitiesDetails />
            </IsProtected>
          }
        />
         <Route
          path="/activity-form"
          element={
            <IsProtected>
              <ActivityForm />
            </IsProtected>
          }
        />
        <Route
          path="/activity"
          element={
            <IsProtected>
              <ActivitiesList />
            </IsProtected>
          }
        />
         <Route path="/privacy" 
      element={
        <IsProtected>
          <PrivacyPolicy />
        </IsProtected>
      } />

      </Routes> 
      <Footer />
    </>
  )
}

export default App
