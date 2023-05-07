import React from 'react'
import profile from "../../Images/Profile.png"
import "./About.css"
const About = () => {
  return (
    <section class="aboutMe" id="aboutMe">
    <div className="about-content">
      <h3>About Me</h3>
       <p>
       Hi, Akhil Singh Rana, I am a passionate software engineer who recently graduated with a PG diploma in Software Engineer Technology from Centennial College and also holds Bachelor's degree in Computer Science and Engineering.  I have experience as a software engineer at Doodleblue Innovations and a data engineer intern at ACIL Technology Pvt. Ltd.
      </p>
      <br />
      <p>
      During my internships, I worked with MERN stack, ReactJS, Git, GitHub, SQL, PowerBI, Azure, and Docker. I have experience developing web applications, data cleaning and wrangling, SQL query optimization, data visualization, and cloud-based technologies. I have excellent communication and presentation skills, efficient time management skills, and I'm a quick learner and problem solver.
      </p>
      <br />
      <p> 
      Please check out my portfolio and <a href="https://github.com/akhilsinghrana07">GitHub</a> to see my work and skills in action.
      </p>
    </div>
    <div className="about-img">
      <img class='profile-img' src={profile} alt="profile" />
    </div>
    </section>

  )
}

export default About