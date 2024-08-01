import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>I'm currently a second-year student at Northeastern University in Boston.</p>
               <p>I have a passion for technology and design, with a keen interest in both Machine Learning and Frontend/Backend development.</p>
               <p>In my free time, I enjoy playing volleyball and immersing myself in various video games. These hobbies not only provide a great balance to my academic pursuits but also help me stay active and engaged.</p>
               <p>I'm always eager to learn new things and take on challenging projects that allow me to grow my skills and contribute to meaningful work.</p>

               {/* <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
    );
  }
}