// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Review = ({review}) => {
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., submit data to backend
//     console.log('Submitted:', { rating, comment });
//     // Reset form fields after submission
//     setRating('');
//     setComment('');
//   };

//   useEffect(() => {
//     const getReviews = async () => {
//         try {
//             const response = await axios.post("http://localhost:3000/review/review");
//             console.log(response.data)
//             setRating(response.data)

//         } catch (err) {
//             console.log("Error fetching reviews", err)
//         }
//     }
//     getReviews();  
//   }, [])

//   return (
//     <>
   
   
//     <form onSubmit={handleSubmit}>
//       <label>
//         Rating:
//         </label>
//         <select value={rating} onChange={(e) => setRating(e.target.value)} required>
//           <option value="">Select Rating</option>
//           <option value="⭐">⭐</option>
//           <option value="⭐⭐">⭐⭐</option>
//           <option value="⭐⭐⭐">⭐⭐⭐</option>
//           <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
//           <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
//         </select>
      
//       <label>
//         Comment:
//         <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
//       </label>
//       <button type="submit">Submit Review</button>
//     </form>
//     </>
//   );
// };

// export default Review;

// const [reviews, setReviews] = useState(null);
// const getReviews = async () => {
//     try {
//         const response = await axios.get("http://localhost:3000/review/review");
//         console.log(response.data)
//             setReviews(response.data)
//     } catch (err) {
//         console.log(err)
//     }
// };
// useEffect(() => {
//     getReviews();

// }, []);
// return (
//     <div>
//         {reviews && reviews.map((Review)=>{
//             <div key={Review._id} className='review'>
//                 <h3>userId: {Review.userId}</h3>
//                 <h3>homeId: {Review.homeId}</h3>
//                 <h3>Rating: {Review.rating}</h3>
//                 <h3>Comment: {Review.comment}</h3>
//             </div>
//         })}
//     </div>
// );



//  };

// export default Review;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/review/review');
        setReviews(response.data);
      } catch (error) {
        console.error(error);
        // res.status(505).json(error )
      }
    };
    getReviews();
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
    
        {reviews.map((review) => (
          <div key={review._userId}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
     
    </div>
  );
};

export default Review;
