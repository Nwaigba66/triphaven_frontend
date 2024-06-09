import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Booking/Booking.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

export const Booking = ({Booking}) => {
  // const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState("");
  const [confirmationId, setConfirmationId,] = useState("");
  const [contact, setContact] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [method, setMethod] = useState("");
  const [card, setCard] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

 
     //this is the onSubmit function

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newBooking = {booking, confirmationId, contact, paymentId, method, card }

        //Reset the form
        setBooking("");
        setConfirmationId("");
        setContact("");
        setPaymentId("");
        setCard("");
      

        try {
            const response = await axios.get("${API_URL}/booking/${bookingid}", newBooking);
            if(response.status === 200 ){
              setBooking(response.data);
            }
            console.log("You created a new booking", response.data);

            
            //this code allows new users navigate to the login page after creating a user account
            nav("/login");

        } catch(err) {
            console.log("Error creating booking", err);
            setError(err.response.data.error);
        }
       
    };
    function handleDelete() {
      axios
        .delete("${API_URL}/booking/${bookingId}")
        .then(() => navigate(`/booking`));
    }


    return (
        <>
         <h2 className="signup-title">Request to book</h2>
         <form onSubmit={handleSubmit}>
        <div className="booking-group">
                <label>
                Hotel Name:
                </label>
                <select 
                id="booking" 
                value={booking} 
                onChange={(event) => setBooking(event.target.value)} 
                required
              > 
                <option value="">Select</option>
                <option value="hotel1">Warm Beds Housing Support</option>
                <option value="hotel2">Homesteady Housing</option>
                <option value="hotel3">Happy Homes Group</option>
                <option value="hotel4">Hopeful Apartment Group</option>
                <option value="hotel5">Seriously Safe Towns</option>
                <option value="hotel5">Hopeful Housing Solutions</option>
                <option value="hotel5">Stylish Loft in Munich City Center”,</option>
                <option value="hotel5">Bright Studio Apartment near Marienplatz</option>
                <option value="hotel5">Manuel Studio Apartment near Karlsplatz</option>
                <option value="hotel5">Hofmans Studio Apartment near Marienplatz</option>
                </select>
              </div>
            <div className="booking-group">
                <label>
                Confirmation Id:
                </label>
                <input type="text" value={confirmationId} onChange={(event) => setConfirmationId(event.target.value)}
                />
            </div>
            <div className="booking-group">
                <label>
                FullNames:
                </label>
                <input type="text" value={contact} onChange={(event) => setContact(event.target.value)}
                />
            </div>
            <div className="booking-group">
                <label>
                Payment Id:
                </label>
                <input type="number" value={paymentId} onChange={(event) => setPaymentId(event.target.value)}
                />
            </div>
            <div className="booking-group">
            <label>Payment Method:</label>
              <select 
                id="method" 
                value={method} 
                onChange={(event) => setMethod(event.target.value)} 
                > 
               <option value="">Credit Card</option>
              </select>
              </div>

              <div className="booking-group">
                <label>
                Upload:
                </label>
                <input type="file" name="image" />
              </div> 
        
              <button type="submit">Submit Booking</button>
              
              </form>
              {error ? <h4 className="error-message">{error}</h4> : null}
            
              </>  
      );
    };

      