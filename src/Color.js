import React from "react";
import { Link } from "react-router-dom";

function Color({ color, hex }) {
  return (
    <div style={{ backgroundColor: hex }}>
      <p>this is the color {color}.</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;