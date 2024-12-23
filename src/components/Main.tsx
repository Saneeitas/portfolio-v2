import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/saneeitas/image/upload/v1734968656/Screenshot_2024-12-23_163930_fv5wwn.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/saneeitas" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/msibrahim/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Muhammad Sani Ibrahim</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;