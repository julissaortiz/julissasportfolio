import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <h1 className="about-me">About Me</h1>
        <h2 className="palabras">
          {" "}
          My name is Julissa Ortiz and I have just graduated from the University
          of Minnesota TC Full Stack Webx Developement Bootcamp. I will also be
          gaining multiple certificates through the U.S. Armed Forces.
        </h2>
        <h3 className="contact-me">Contact Me</h3>
        <h4 className="palabras-2">
          <p>Check out my GitHub profile:</p>
          <a href="https://github.com/julissaortiz">My GitHub Profile</a>
          <br></br>
          <br></br>
          <p>Check out my LinkedIn profile:</p>
          <a href="https://www.linkedin.com/in/julissa-ortiz-46a853288/">
            My LinkedIn Profile
          </a>
        </h4>
      </div>
    </div>
  );
}
