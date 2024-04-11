import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <iframe
        src="https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif"
        width="480"
        height="400"
        frameBorder="0"
        className="404"
        allowFullScreen
      ></iframe>
      <h1>This Page is not Found</h1>
      <Link to="/">
        <button>Let me redirect you</button>
      </Link>
    </div>
  );
};