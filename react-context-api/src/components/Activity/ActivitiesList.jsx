import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function ActivitiesList() {
  const [activities, setActivities] = useState("");

  const getActivities = async () => {
    try {
      const allAct = await axios.get("http://localhost:3000/activity/");
      setActivities(allAct.data);
    } catch (err) {
      console.log("Error fetching all activities", err);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  // console.log(activities);
  if (!activities) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="activity-block">
      <div className="activity-list">
        <h1>Our Activities</h1>
        <h2 className="title-text">Welcome Triphaven Activity page. You are free to add your activity on our form below</h2>
        <Link to="/activity-form">
          <button>Add an activity</button>
        </Link>
        {activities.length > 0 ? (
          activities.map((oneAct) => {
            return (
              <Link key={oneAct._id} to={`/activity/${oneAct._id}`}>
                <div className="activity-card">
                  <img src={oneAct.thumbnail} alt={oneAct.title} />
                  <div className="activity-content">
                    <h2>{oneAct.title}</h2>
                    <h4>{oneAct.location}</h4>
                    <p>{oneAct.price}€ p.p</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No activities found</p>
        )}
      </div>
    </div>
  );
}