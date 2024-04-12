import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Review = () => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [home, setHome] = useState('');
    const [error, setError] = useState(null);

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newRating = { homeId: home, rating, comment };
            const response = await axios.get(`http://$/{API_URL}/review/{:reviewId}`, newRating);
            console.log("You created a new Rating", response.data);

            if (response.status === 200) {
                setRating(response.data);
            }

            // Reset form fields after successful submission
            setRating('');
            setComment('');
            setHome('');

            // Navigate to desired page after successful submission
            nav("/signup");
        } catch (err) {
            console.log("Error creating review", err);
            setError(err.response.data.error);
        }
    };

    return (
        <>
            <div className="review-box"></div>
            <form onSubmit={handleSubmit}>
                <div className="booking-group">
                    <label>
                        Hotel Name:
                    </label>
                    <select
                        id="home"
                        value={home}
                        onChange={(event) => setHome(event.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="hotel1">Warm Beds Housing Support</option>
                        <option value="hotel2">Homesteady Housing</option>
                        <option value="hotel3">Happy Homes Group</option>
                        <option value="hotel4">Hopeful Apartment Group</option>
                        <option value="hotel5">Seriously Safe Towns</option>
                        <option value="hotel6">Hopeful Housing Solutions</option>
                        <option value="hotel7">Stylish Loft in Munich City Center</option>
                        <option value="hotel8">Bright Studio Apartment near Marienplatz</option>
                        <option value="hotel9">Manuel Studio Apartment near Karlsplatz</option>
                        <option value="hotel10">Hofmans Studio Apartment near Marienplatz</option>
                    </select>
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
                <label className="comment-btn">
                    Comment:
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
                </label>
                <button className="review-btn" type="submit">Submit Review</button>
            </form>
        </>
    );
}
