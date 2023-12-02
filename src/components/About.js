import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div class="about-header">
        <div class="container">
          <h1>About Us</h1>
          <p>Driving School Online System's Mission is to give people skills about Driving in different area
            all over the world especially in Rwanda. Driving School Online System will be help you when travelling 
            because it teach about skills to help you knowing the road rules even Driving so that it may easier your 
            practices and exams about Driving License.

    
          </p>
        </div>
      </div>

      <div class="about-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h2>Our Story</h2>
              <p>
                It's a project thought when I was studying.I was passionate about how our system work in our country
                and how Tourists and other people struggle while learning to drive an mixing with other things like work and 
                others. 

              </p>
            </div>
            <div class="col-lg-4">
              <h2>Our Team</h2>
              <p>
                We have a diverse team of passionate individuals dedicated to
                bring you the best learning experience.
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-4">
              <h2>Our Mission</h2>
              <p>
                We strive to empower individuals by providing accessible and
                high-quality educational content.
              </p>
            </div>
            <div class="col-md-4">
              <h2>Our Values</h2>
              <ul>
                <li>Excellence</li>
                <li>Innovation</li>
                <li>Collaboration</li>
                <li>Customer-Centric</li>
              </ul>
            </div>
            <div class="col-md-4 about"></div>


          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
