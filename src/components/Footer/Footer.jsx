import { Typography } from "@mui/material";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">Portfolio</Typography>
        <Typography>
        Built with the latest web technologies, this portfolio showcases my skills in front-end development. It was created using React,
        a popular JavaScript library for building user interfaces, and Three.js, a powerful 3D graphics library. The layout was designed 
        using CSS Grid and Flexbox, and the site is fully responsive for optimal viewing on any device. 
        Additionally, the portfolio is deployed using Netlify, a cloud-based platform for hosting and managing web projects. 
        </Typography>

        <a href="https://akhilsinghrana07-python-portfolio-home-bih7h5.streamlit.app/Contact_Me" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </a>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/akhilsinghrana07" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/akhilsinghrana/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/akhilsinghrana729/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
