// // src/components/About.jsx

// import React from 'react';
// import './About.css';
// import profileImg from '../assets/photo/Aphoto.jpg';

// function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <h2 className="section-title">About Me</h2>
//         <div className="about-content">
//           <img 
//             src="./src/assets/photo/Aphoto.jpg" // Replace with your image path or a URL
//             alt="Professional Profile Picture" 
//             className="profile-pic"
//           />
//           <div className="bio">
//             <p>
//               Hello! I'm **[Your Name]**, a passionate **[Your Role/Title, e.g., Junior React Developer]** with X years of experience building modern, responsive, and user-centric web applications.
//             </p>
//             <p>
//               My focus is on creating clean, efficient code and transforming complex problems into simple, beautiful interfaces. I am proficient in **[List key skills, e.g., JavaScript, React, HTML, CSS, Git]**.
//             </p>
//             <p>
//               When I'm not coding, I enjoy **[Mention a hobby or two, e.g., hiking and reading sci-fi]**. I'm currently seeking new opportunities to collaborate on exciting projects.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
// src/components/About.jsx

import React from 'react';
import './About.css';
// Importing the image ensures the build tool (Vite/Webpack) 
// correctly processes the path for production.
import profilePic from '../assets/Aphoto.jpeg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <img 
            src={profilePic} 
            alt="Deependra Kumar Singh" 
            className="profile-pic"
          />
          <div className="bio">
            <p>
              Hello! I'm Deependra Kumar Singh, a passionate Full-Stack Developer
              dedicated to building modern, responsive, and user-centric web applications.
            </p>
            <p>
              My focus is on creating clean, efficient code and transforming complex problems 
              into simple, beautiful interfaces. I am proficient in JavaScript, 
              React, HTML5, CSS3, and Node.js.
            </p>
            <p>
              Beyond the terminal, I am an avid learner of emerging technologies and enjoy 
              collaborating on open-source projects. I'm currently seeking new 
              opportunities to contribute my skills to impactful and exciting teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;