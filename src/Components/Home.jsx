import React from 'react';
import "../style/Home.css";
import { motion, useViewportScroll, useTransform } from 'framer-motion';


export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <>
      <motion.div className="main-container" style={{ scale: scale }}>
        <img src="homepic.png" alt="Your Image Description"/> 
        <div className="overlay-text">Learn with Dhara Global Solutions</div>
        <div className="border-container">
          <p>Get in touch</p>
        </div>
      </motion.div>

      <div className="parent-container" >
      <div className="a"> <div > <span> About Us</span> <p>Dhara Global Solutions is a forward-thinking 
      and dynamic organization dedicated to empowering engineering 
      students with the skills and knowledge needed to excel in the 
      world of technology and innovation. Our primary focus is on providing
       professional implant training and internships, aiming to bridge the
        gap between classroom learning and real-world application.
         Key Features of Dhara Global Solutions: 1. We offer a diverse 
         range of training programs that cover the latest technologies 
         and industry trends. Our training modules are designed to equip
          engineering students with practical, hands-on experience that is 
          relevant to their field of study. 2. We believe in the power of experiential
           learning. Our training involves practical projects, case studies, and workshops,
            allowing students to apply what they've learned and gain confidence in their skills.</p></div></div>
      <div className="b"><img src='abouthome.png'/></div>
    </div>
    <div className="home-outer-container"  >
    <div className="home-centered-text">Services<p>We Provide a wide range of Services like College Intership,Industrial trainings,Resarch Guidance,Project Guidance and many more.</p></div>
    <div className="home-inner-container">
      <div className="home-inner-item">
        <img src="homepic.png" alt="Image 1" className="home-circle-image" />
        <p className="home-image-name">College Intership</p>
        <p className="home-image-description">Professional learning experience that offers meaningfull,practice work related to a student's field of study or career interest.</p>
      </div>
      <div className="home-inner-item">
        <img src="homepic.png" alt="Image 2" className="home-circle-image" />
        <p className="home-image-name">Industrial Training</p>
        <p className="home-image-description">The essential system to open understudies to genuine work life circumstancs and to outfit them with the vital abilities.</p>
      </div>
      <div className="home-inner-item">
        <img src="homepic.png" alt="Image 3" className="home-circle-image" />
        <p className="home-image-name">Research Guidance</p>
        <p className="home-image-description">We offer PhD assistance and research guidance services for PhD experts will help you in completing your research at every PhD stage.</p>
      </div>
    </div>
  </div>

  <div className="home-outer-container1">
    <div className="home-centered-text">Testimonials</div>
    <div className="home-inner-container">
      <motion.div className="home-inner-item" style={{ scale: scale1 }}>

        <p className="home-image-description">"Good service, customized projects available for any domains, Trainings is well organized, Intership opportunities also available."</p>
       
        <span>Prasanth Y</span>
        </motion.div>
        <motion.div className="home-inner-item" style={{ scale: scale1}}>
        <p className="home-image-description">"The classes were said and we learned about arduino, this online class will be useful for us in the future."</p>
        <br></br>
        <span>Harmeed S</span>
      </motion.div>
      <motion.div className="home-inner-item"style={{ scale: scale1}}>
        <p className="home-image-description">"This whole experience was good .I have learnt plenty of stuff during the intership program."</p>
        <br></br>
        <span>Kiran K</span>
        </motion.div>
    </div>
  </div>
    </>
  );
}
