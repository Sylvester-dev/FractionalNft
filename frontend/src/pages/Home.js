import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Frame</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
