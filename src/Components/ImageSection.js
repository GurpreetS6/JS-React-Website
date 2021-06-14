import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4><span> Hi, welcome to my page!</span></h4>
                <p className="about-text">
                    Thank you for visiting my page! Here you can find some information about me and
                    my background. I'm actively seeking opportunities which require great programming
                    knowledge where I can leverage my technical problem solving skills. Outside of 
                    my professional career, I enjoy watching Netflix and playing with my two cats! 
                    Please feel free to reach out, we can talk about anything ranging from programming
                    languages to show recommendations!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Work Availability</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Gurpreet Singh</p>
                        <p>: 22</p>
                        <p>: Yes, U.S. Citizen</p>
                        <p>: English (Fluent), Punjabi (Professional), Hindi (Professional) </p>
                        <p>: South Richmond Hill, NY 11419</p>
                        <p>: United States of America</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
