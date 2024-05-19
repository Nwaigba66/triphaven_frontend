import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await axios.get(`${API_URL}/home/allhomes`);
                setRooms(response.data);
            } catch (err) {
                console.error("Error fetching rooms:", err);
            }
        };
        getRooms();
    }, []);

    return (
        <div className="container">
            <h1>Triphaven Exclusive Airbnb</h1>
            <div className="box">
                {rooms.map((room) => (
                    <Link to={`/dashboard/${room._id}`} key={room._id}>
                        <div className="room">
                            <img src={room.imageUrl} alt={room.name} width={400} height={400} />
                            <p className="guest">{room.guest}</p>
                            <p className="guest">{room.name}</p>
                            <p className="guest">{room.city}</p>
                            <p className="guest">{room.state}</p>
                            <p className="guest">{room.country}</p>
                            <p className="guest">{room.availableUnits}</p>
                            <p className="guest">{room.rating}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
