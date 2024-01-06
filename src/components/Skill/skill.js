import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



import "./skill.css";


const skills = ({ name, percentage }) => {
  return (
    <>

    <h1 class="animated-text">Technical skills  <i className="p-s">Other's</i></h1>
    
      <div className="for-skill-all">
        

        <div className="container-skills">


          <div class="skill-box">
            <span class="title">HTML</span>

            <div class="skill-bar">
              <span class="skill-per html">
                <span class="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div class="skill-box">
            <span class="title">CSS</span>

            <div class="skill-bar">
              <span class="skill-per css">
                <span class="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">JavaScript</span>

            <div class="skill-bar">
              <span class="skill-per javascript">
                <span class="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">ReactJS</span>

            <div class="skill-bar">
              <span class="skill-per Reactjs">
                <span class="tooltip">50%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">Python</span>

            <div class="skill-bar">
              <span class="skill-per Python">
                <span class="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">Django</span>

            <div class="skill-bar">
              <span class="skill-per Django">
                <span class="tooltip">50%</span>
              </span>
            </div>
          </div>

          <div class="skill-box">
            <span class="title">Bootstrap</span>

            <div class="skill-bar">
              <span class="skill-per Bootstrap">
                <span class="tooltip">80%</span>
              </span>
            </div>
          </div>

          
        </div>
        
        <div className="container-skills">
        
          <div class="skill-box">
            <span class="title">C(programming language)</span>

            <div class="skill-bar">
              <span class="skill-per C">
                <span class="tooltip">95%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">C++</span>

            <div class="skill-bar">
              <span class="skill-per Cplus">
                <span class="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">Git/GitHub</span>

            <div class="skill-bar">
              <span class="skill-per Git">
                <span class="tooltip">60%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">Time Management</span>

            <div class="skill-bar">
              <span class="skill-per Time">
                <span class="tooltip">90%</span>
              </span>
            </div>
          </div>
          <div class="skill-box">
            <span class="title">Communication</span>

            <div class="skill-bar">
              <span class="skill-per Communication">
                <span class="tooltip">70%</span>
              </span>
            </div>
          </div>

          </div>

       

            </div>
    </>
  )
}


export default skills;
