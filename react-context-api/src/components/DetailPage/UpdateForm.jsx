import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateForm = () => {
    const [room, setRoom] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [guest, setGuest] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [availableUnits, setAvailableUnits] = useState("");
    const [wifi, setWifi] = useState("");
    const [price, setPrice] = useState("");
    const [priceCurrency, setPriceCurrency] = useState("");
    const [latitude, setLatitude] = useState("");
    const [rating, setRating] = useState("");
    const [laundry, setLaundry] = useState("");
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

    const { roomId } = useParams();
    const nav = useNavigate();

    
      useEffect(() => {
        const getUpdateProduct = async () => {
          try {
            const response = await axios.get(`{API_URL}/room/${roomId}`);
            const updatedRoom = response.data;
    
            setRoom(updatedRoom.room);
            setImageUrl(updatedRoom.imageUrl);
            setGuest(updatedRoom.guest);
            setName(updatedRoom.name);
            setCountry(updatedRoom.country);
            setState(updatedRoom.state);
            setCity(updatedRoom.city);
            setAvailableUnits(updatedRoom.availableUnits);
            setWifi(updatedRoom.wifi);
            setPrice(updatedRoom.price);
            setPriceCurrency(updatedRoom.priceCurrency);
            setLatitude(updatedRoom.latitude);
            setRating(updatedRoom.rating);
            setLaundry(updatedRoom.laundry);
          } catch (error) {
            console.error("Error fetching room details:", error);
            setError(error.message);
          }
        };
        getUpdateProduct();
      }, [roomId]);
    
      const handleUpdate = async (e) => {
        e.preventDefault();
    
        const roomData = {
          room: room,
          imageUrl: imageUrl,
          guest: guest,
          name: name,
          country: country,
          state: state,
          city: city,
          availableUnits: availableUnits,
          wifi: wifi,
          price: price,
          priceCurrency: priceCurrency,
          latitude: latitude,
          rating: rating,
          laundry: laundry,
        };
    
        try {
          const response = await axios.put(`${API_URL}/room/${roomId}`, roomData);
          console.log("Room updated successfully:", response.data);
          nav(`/home/${roomId}`);
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      };
    
      return (
        <div className="add-container">
          <div className="update-form">
            <h2 className="title">Update Room Information</h2>

            <div className="outer-form">
            <form onSubmit={handleUpdate}>
            <div className="form-group">
            <option value="">Select</option>
            <select>
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
              <div className="form-group">

          </div>
              <div className="form-group">
                <label className="label">Guest:</label>
                <input
                  type="text"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Country:</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select country</option>
                  <option value="Germany">Germany</option>
                  <option value="USA">USA</option>
                  <option value="USA">Nigeria</option>
                </select>
              </div>
              {country === "Germany" && (
                <div className="form-group">
                  <label>State:</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select state</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Bavaria">Bavaria</option>
                    {/* Add more states for Germany as needed */}
                  </select>
                </div>
              )}
              {country === "USA" && (
                <div className="form-group">
                  <label>State:</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select state</option>
                    <option value="California">California</option>
                    <option value="New York">New York</option>
                    {/* Add more states for USA as needed */}
                  </select>
                </div>
              )}
              <div className="form-group">
                <label>City:</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Available Units:</label>
                <input
                  type="text"
                  value={availableUnits}
                  onChange={(e) => setAvailableUnits(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>WiFi:</label>
                <input
                  type="text"
                  value={wifi}
                  onChange={(e) => setWifi(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Price Currency:
                <input
                  type="text"
                  value={priceCurrency}
                  onChange={(e) => setPriceCurrency(e.target.value)}
                  className="form-input"
                />
                </label>
              </div>
              <div className="form-group">
                <label>Latitude:</label>
                <input
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="form-input"
                />
              </div>
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
              <div className="form-group">
                <label>Laundry:</label>
                <input
                  type="text"
                  value={laundry}
                  onChange={(e) => setLaundry(e.target.value)}
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-button">
                Update Room Details
              </button>
            </form>
            </div>
          </div>
        </div>
      );
    };
    


