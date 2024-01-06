import './about.css'
import React from 'react';
import logo3 from '../../assets/images/logo-3.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container about-page">

<h1>About Me</h1>
      <img className='bg' src={logo3} alt="about" />
      <br />
      <div className='for-about'>
  
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
      
        <p className='abt'> Hi, I'm Om Makwana, a skilled web developer with a passion for AI/ML and IoT technologies.

          I have developed a deep understanding of various programming languages, frameworks, and tools used in web development.
        </p>
        <br />
        <p className='abt'>I specialize in leveraging the power of AI/ML to build intelligent systems that enhance the user experience and solve complex business problems. Whether it's developing smart chatbots, predictive analytics models, or computer vision applications, I have the technical expertise and creativity to bring innovative ideas to life.</p>
        <br />
        <p className='abt'>
          If you're looking for a web developer who can seamlessly integrate AI/ML and IoT technologies into your project, look no further. Let's work together to build cutting-edge web applications that push the boundaries of what's possible.
        </p>
      </div>
      <br />
      <br />

      <button className='boton' onClick={() => navigate('/contact')}>Hire Me</button>




    </div>
  );
};

export default About;
