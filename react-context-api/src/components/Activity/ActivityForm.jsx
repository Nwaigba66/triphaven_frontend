import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const ActivityForm = () => {
  const { userId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [meetingPoint, setMeetingPoint] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [date, setDate] = useState(Date.now);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [host, setHost] = useState(userId);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const theToken = localStorage.getItem("authToken");
  const nav = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const activityToCreate = {
      title,
      description,
      location,
      meetingPoint,
      capacity,
      date,
      price,
      images,
      thumbnail,
      latitude,
      longitude,
    };

    axios
      .post("http://localhost:3000/activity", activityToCreate, {
        headers: {
          authorization: `Bearer ${theToken}`,
        },
      })
      .then((res) => {
        console.log("you created an activity", res.data);
        setUser(res.data.updatedUser);
        nav("/activity");
      })
      .catch((err) => {
        console.log(
          "there was an error creating activity",
          err.response.data.message
        );
        // setError(err);
      });

    // Clear the form
    setTitle("");
    setDescription("");
    setLocation("");
    setMeetingPoint("");
    setCapacity("");
    setDate("");
    setPrice("");
    setImages("");
    setThumbnail("");
    setHost("");
  };

  return (
    <div className="activity-form">
      <h1>Add activity</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Title :
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          Description :
          <textarea
            className="activity-form-descr"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          Location :
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          Meeting point :
          <input
            type="text"
            value={meetingPoint}
            onChange={(e) => {
              setMeetingPoint(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          People capacity :
          <input
            type="number"
            value={capacity}
            onChange={(e) => {
              setCapacity(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          Price per person :
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
          Thumbnail image :
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>
        </div>
       

        <div className="form-group">
        <label>
          Latitude:
          <input
            type="number"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            step="0.00000001"
          />
        </label>
        </div>

        <div className="form-group">
        <label>
          Longitude:
          <input
            type="number"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            step="0.00000001"
          />
        </label>
        </div>
        <div className="form-group">
        <label>
          Images :
          <input
            type="file" 
            value={images}
            onChange={(e) => {
              setImages(e.target.value);
            }}
          />
        </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ActivityForm;