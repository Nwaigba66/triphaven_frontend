import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';

const DetailPage = ({ rooms, setRooms, review}) => {

    const [room, setRoom] = useState(null);
   
    const {roomId} = useParams();

    useEffect(()=>{
        const getOneRoom = async () => {
            
            try{
                const response = await axios(`http://localhost:3000/home/${roomId}`);
                console.log(response.data)
                setRoom(response.data)
            }catch(err){
                console.log("Error fetching room", err)
            }    
        };
        getOneRoom();
    }, [roomId])

    if (!room){
        return <p>Loading...</p>;
    }console.log(room)
  return (
    <>
    <h2 className="title">Room Information</h2>
        
        <img src={room.imageUrl} alt="Room" width={500} height={500}/>
        <p>Guest : {room.guest}</p>
        <p>Name : {room.name}</p>
            <p>City : {room.city}</p>
          <p>State : {room.state}</p>
          <p>Country : {room.country}</p>
          <p>AvailableUnits : {room.availabeUnits}</p>
          <p>Wifi : {room.wifi}</p>
          <p>Price : {room.price}</p>
          <p>priceCurrency : {room.priceCurrency}</p>
          <p>Latitude : {room.latitude}</p>
          <p>Longitude : {room.longitude}</p>
          <p>Ratings : {room.rating}</p>
          <p>Laundry : {room.laundry}</p>

          <div>
        <Link to="/review" className="review">Leave a Review</Link>
        <button className="booking">Make a Booking</button>
        </div>

          <div>
            <h3>Would you like to Proceed with Payment?</h3>
            <button>Make Payment</button>  
          </div>
    </>
  )
}
const Review = () => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., submit data to backend
        console.log('Submitted:', { rating, comment });
        // Reset form fields after submission
        setRating('');
        setComment('');
    };

return (
    <>
        <div>Review</div>
        <form onSubmit={handleSubmit}>
            <label>
                Rating:
                <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                    <option value="">Select Rating</option>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                </select>
            </label>
            <label>
                Comment:
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    </>
);
}
export default DetailPage;
