import React from "react";

import NavBar from "../../components/NavBar";

const Info = () => {
  return (
    <>
      <NavBar />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>It was first released in 2013</li>
        <li>It was originally created by Jordan Walke</li>
        <li>It has over 100k stars on Github</li>
        <li>It is maintained by Meta</li>
        <li>It powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
};

export default Info;
