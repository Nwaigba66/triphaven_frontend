import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from 'axios';

export const DetailPage = ({ rooms, setRooms}) => {

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
    
    </>
  )
}
