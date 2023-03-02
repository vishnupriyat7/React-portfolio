import React from "react";
import { Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy; 2022 abc.app</p>
    </div>
  );
}

export default Footer;
