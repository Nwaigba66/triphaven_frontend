import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"


export const DashboardPage = () => {
    const [rooms, setRooms] = useState([]);
    const [cityFilter, setCityFilter] = useState("");
    const [countryFilter, setCountryFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [homeFilter, setHomeFilter] = useState("");
    const [filteredRooms, setFilteredRooms] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage] = useState(6);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await axios.get(`{API_URL}/home/allhomes`);
                setRooms(response.data);
                filterRooms(response.data);
            } catch (err) {
                console.error("Error fetching rooms:", err);
            }
        };
        getRooms();
    }, []);

    const filterRooms = (rooms) => {
        let filtered = rooms;

        if (cityFilter) {
            filtered = filtered.filter((room) => room.city.toLowerCase() === cityFilter.toLowerCase());
        }

        if (countryFilter) {
            filtered = filtered.filter((room) => room.country.toLowerCase() === countryFilter.toLowerCase());
        }

        if (homeFilter) {
            filtered = filtered.filter((room) => room.name.toLowerCase().includes(homeFilter.toLowerCase()));
        }

        if (searchQuery) {
            filtered = filtered.filter(
                (room) =>
                    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    room.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    room.country.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredRooms(filtered);
    };

    useEffect(() => {
        filterRooms(rooms);
    }, [cityFilter, countryFilter, homeFilter, searchQuery]);

    // Pagination logic
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = filteredRooms.slice(indexOfFirstItem, indexOfLastItem);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
           <div className="filter-section">
                <h1 id="filter">Triphaven Exclusive Airbnb</h1>
                
                <select value={homeFilter} onChange={(e) => setHomeFilter(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Warm Beds Housing Support">Warm Beds Housing Support</option>
                    <option value="Homesteady Housing">Homesteady Housing</option>
                    <option value="Happy Homes Group">Happy Homes Group</option>
                    <option value="Hopeful Apartment Group">Hopeful Apartment Group</option>
                    <option value="Seriously Safe Towns">Seriously Safe Towns</option>
                    <option value="Hopeful Housing Solutions">Hopeful Housing Solutions</option>
                    <option value="Stylish Loft in Munich City Center">Stylish Loft in Munich City Center</option>
                    <option value="Bright Studio Apartment near Marienplatz">Bright Studio Apartment near Marienplatz</option>
                    <option value="Manuel Studio Apartment near Karlsplatz">Manuel Studio Apartment near Karlsplatz</option>
                    <option value="Hofmans Studio Apartment near Marienplatz">Hofmans Studio Apartment near Marienplatz</option>
                </select>

                <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
                    <option value="">All Cities</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Gary">Gary</option>
                    <option value="Oakland">Oakland</option>
                    <option value="Juneau">Juneau</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Munich">Munich</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="CA">CA</option>
                    <option value="TX">TX</option>
                    <option value="New York">New York</option>
                    <option value="IL">IL</option>
                </select>

                <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
                    <option value="">All Countries</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                </select>

                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredRooms.length > 0 ? (
                filteredRooms.map((room) => (
                    <Link key={room._id} to={`/dashboard/${room._id}`}>
                        <div className="room">
                            <img src={room.imageUrl} alt={room.name} width={400} height={400} />
                            <p className="guest"> <strong>Guest: {room.guest}</strong></p>
                            <p className="guest">Apartment Name: {room.name}</p>
                            <p className="guest">City: {room.city}</p>
                            <p className="guest">State: {room.state}</p>
                            <p className="guest">country: {room.country}</p>
                            <p className="guest">Available Units: {room.availableUnits}</p>
                            <p className="guest">Rating: {room.rating}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No rooms found.</p>
            )}

              {/* Pagination controls  */}
             {/* <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    disabled={indexOfLastItem >= filteredRooms.length}
                    onClick={() => paginate(currentPage + 1)}
                >
                    Next
                </button>
            </div> */}
        </>
    );
};
