import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailPage = () => {
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const { roomId } = useParams();

    useEffect(() => {
        const getOneRoom = async () => {
            try {
                const response = await axios(`http://$/{API_URL}/home/${roomId}`);
                console.log(response.data);
                setRoom(response.data);
            } catch (err) {
                console.log("Error fetching room", err);
            }
        };
        getOneRoom();
    }, [roomId]);

    if (!room) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2 className="title">Room Information</h2>

            <img src={room.imageUrl} alt="Room" width={500} height={500} />
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
                <Link to="/booking">
                    <button className="booking">Make a Booking</button>
                </Link>
            </div>

            <div>
                <div>
                    <Link to="/update">
                    <button>Update Room</button>
                    </Link>
                </div>
                <div>
                    <button>Delete Room</button>
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Return Home</button>
                </div>
            </div>
        </>
    );
};

export default DetailPage;
