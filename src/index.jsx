import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <nav>
    <h1>Website</h1>
    <ul>
      <li>home</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </nav>
);
