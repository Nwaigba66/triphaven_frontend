import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';



export const DashboardPage = () => {
    // const [searchterm, setSearchTerm] = useState("");
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

   useEffect(() => {
    const getRooms = async () => {
        try {
            const response = await axios.get(`http://$/{API_URL}/home/allhomes`);
            console.log(response.data)
            setRooms(response.data)
        } catch (err) {
            console.error("Error fetching rooms:", err);   
        }
    }
    getRooms();
   }, [])

  return (
    <div>
        <h1>Triphaven Exclusive Airbnb</h1>
        <div className="box">
        {rooms.map((Room) => (
        <Link to={`/dashboard/${Room._id}`}>
           <img src={Room.imageUrl} alt="image" width={400} height={400}/>
          <div  className="room" key={Room._id}>
          <p className="guest">{Room.guest}</p>
            <p className="guest">{Room.name}</p>
          <p className="guest">{Room.city}</p>
          <p className="guest">{Room.state}</p>
          <p className="guest">{Room.country}</p>
          <p className="guest">{Room.availabeUnits}</p>
          <p className="guest">{Room.rating}</p>
          </div> 
          </Link>
        ))}
        </div>
    </div>
  )
}
