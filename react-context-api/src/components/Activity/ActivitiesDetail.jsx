import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { AuthContext } from "../../Context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function ActivitiesDetails() {
  const [activity, setActivity] = useState("");
  const { activityId } = useParams();
  const { user } = useContext(AuthContext);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [activityCoordinates, setActivityCoordinates] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API,
  });

  const nav = useNavigate();

  useEffect(() => {
    const getOneAct = async () => {
      try {
        const thisAct = await axios.get(`${API_URL}/activity/${activityId}`);
        const { title, description, location, meetingPoint, capacity, datesAvailable, startTime, endTime, price, thumbnail, images, host, latitude, longitude } = thisAct.data;
        setActivity({ title, description, location, meetingPoint, capacity, datesAvailable, startTime, endTime, price, thumbnail, images, host, latitude, longitude });
        setActivityCoordinates({ lat: latitude, lng: longitude });
        setIsMapLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    axios
      .get(`${API_URL}/review/${activityId}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) =>
        console.error("Error fetching lodging reviews:", error)
      );

    getOneAct();
  }, [activityId]);

  if (!activity) {
    return <p>Loading</p>;
  }

  const handleDelete = () => {
    if (confirm("Are you sure ?")) {
      axios
        .delete(`${API_URL}/activity/${activityId}`)
        .then((response) => {
          axios.get(`${API_URL}/activity`)
          .then((response) => {
            setActivity(response.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
      nav("/activity");
    }
  };

  function showCreateReview() {
    setShowAddReview(!showAddReview);
  }

  function addReview(e) {
    e.preventDefault();
    const { _id: userId } = user;
    const review = {
      user: userId,
      property: activityId,
      title,
      comment,
      rating,
    };
    axios
      .post(`${API_URL}/review`, review)
      .then((response) => {
        console.log(response);
        nav(0);
      })
      .catch((error) => console.error("Error posting reviews:", error));
  }

  const renderedReviews = reviews.map((rev) => (
    <div key={rev._id}>
      <p>{rev.comment}</p>
      <h2>{rev.title}</h2>
      <p>
        {Array(5)
          .fill()
          .map((_, i) => (i < rev.rating ? "⭐" : "☆"))
          .join("")}
      </p>
    </div>
  ));

  return (
    <div className="activity-details">
      <div className="activity-details-content">
        <img src={activity.images} alt={activity.title} />
        <h1>{activity.title}</h1>
        <h2>
          {activity.location} - max capacity : {activity.capacity} pers.
        </h2>

        <h3>{activity.price}€ per persons.</h3>
        <p>{activity.description}</p>

        <h3>
          Hosted by : <em>{activity.host?.userName}</em>
        </h3>
        <div className="activity-meetingpoint">
          <h2>Meet here : {activity.meetingPoint}</h2>
          <div className="map-container">
            {isLoaded && activityCoordinates && (
              <>
                <GoogleMap
                  mapContainerClassName="maps-embeded"
                  center={activityCoordinates}
                  zoom={15}
                >
                  <Marker
                    position={activityCoordinates}
                    onClick={() => setSelectedMarker(activityCoordinates)}
                  />
                </GoogleMap>
              </>
            )}
          </div>
        </div>
        {activity.host?._id === user?._id ? (
          <>
            <Link to={`/activity/${activityId}/edit`}>
              <button>Update activity</button>
            </Link>
            <button onClick={handleDelete}>Delete activity</button>
          </>
        ) : (
          <>
            <button>Book now</button>
            <Link to={`/user/${activity.host._id}`}>
              <button>See Host!</button>
            </Link>
          </>
        )}
        <button onClick={showCreateReview}>Add Review</button>
        <div className="activity-form">
          {showAddReview && (
            <form onSubmit={addReview}>
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
              <label>
                Review :
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </label>
              <label>
                Rating :
                <input
                  type="text"
                  value={rating}
                  placeholder="your rating out of 5"
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </label>
              <button>Submit</button>
            </form>
          )}
        </div>
        <div className="activity-reviews">{renderedReviews}</div>
      </div>
    </div>
  );
}