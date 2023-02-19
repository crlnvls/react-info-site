import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <p>
        2023 Ⓒ{" "}
        <Link to="https://github.com/crlnvls/react-info-site" target="_blank">
          Caroline Veloso
        </Link>
      </p>
    </>
  );
};

export default Footer;
