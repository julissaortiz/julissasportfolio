import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/julissa.ortiz.9404">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/julissa.ortizzz/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Julissa</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🚨",
                    4000,
                    "Full Stack Developer 💻",
                    4000,
                    "MERN Stack Dev ⚙️",
                    4000,
                    "React Dev 📈",
                    4000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Ability to build applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="Resume2022(1).pdf" download="Resume2022(1).pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
