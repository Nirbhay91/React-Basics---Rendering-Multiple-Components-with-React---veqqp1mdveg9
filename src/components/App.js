import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="root">
      <h1 data-ns-test="project-name"> Moving Ticket Booking </h1>
      <p data-ns-test="project-description">
        Coustomer Book the movie ticket along with seat number also one person
        book multipule seat through own id{" "}
      </p>
    </div>
  );
};

export default App;
