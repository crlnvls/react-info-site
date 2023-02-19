import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Info.css";

const Info = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <h1 className="header">Fun Facts about React</h1>
        <div className="facts">
          <ul>
            <li>It was first released in 2013</li>
            <li>It was originally created by Jordan Walke</li>
            <li>It has over 100k stars on Github</li>
            <li>It is maintained by Meta</li>
            <li>
              It powers thousands of enterprise apps, including mobile apps
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Info;
