import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron">
      <h1>Birds From Coquimbo</h1>
      <p>Birds from coquimbo and API</p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default Home;
