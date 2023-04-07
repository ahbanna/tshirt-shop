import React from "react";
import Friend from "../Friend/Friend";

const Cusin = ({ children }) => {
  return (
    <div>
      <h2>Cusin</h2>
      <p>
        <small>{children}</small>
        <Friend></Friend>
      </p>
    </div>
  );
};

export default Cusin;
