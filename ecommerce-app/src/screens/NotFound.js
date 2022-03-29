import { Link } from "react-router-dom";
import React from "react";

export const NotFound = () => {
  return (
    <div>
      <img
        style={{ width: "100%", height: "300px", objectFit: "contain" }}
        src="/images/notfound.jpg"
        alt="Not-found"
      />
      <button>
        <Link to="/">HomePage</Link>
      </button>
      {/* homeComponents */}
    </div>
  )
}