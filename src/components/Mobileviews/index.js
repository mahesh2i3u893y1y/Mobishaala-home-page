import React from "react";
import ReactPlayer from 'react-player'
import { FaWhatsapp } from "react-icons/fa6";
import "./index.css"

const Mobileviews = () =>{
    return(
        <>
        <div className="main-container">
            <p className="content">Create your <span className="span">Digital Classroom </span> in 5 mins for <span className="span">
            FREE</span>& connect to 1+ Million Students.</p>

            <div className="video">
                <ReactPlayer url="https://youtu.be/jg5d59ligW4?si=iLXtJw5bFOAfmW9t"  controls autoloop/>
            </div>

            <div className="buttons-container">
            <button className="button">Buy</button>
            <p className="para">Institute/Teacher</p>
            <button className="button">Get Started</button>
            <p className="para">Student</p>
            <button className="button">Download App</button>
            <button className="whatsup-button"><FaWhatsapp className="icon"/>Talk to Us</button>
            </div>
        </div>
            <div className="mobishaala">
                <h1 className="heading">Mobishaala</h1>
                <h1 className="sub-heading">Vision</h1>
                <p className="sub-para">Empower Institutions & Teachers with state of 
                    the art digital classroom Technology
                </p>
                <h1 className="sub-heading">Address</h1>
                <p className="sub-para"><span className="office">Registred Office</span>: 804,5th Cross, 9th main, 4th Block
                Koramangala,Bangalore,Karnataka 560034</p>
                <p className="sub-para"><span className="office">Corporate Office</span>: 293,Westend Marg, near Saket,
                Saidulajab,Saket, New Delhi, 110030</p>

                <h1 className="sub-heading">Quick Links</h1>
                <ul className="links">
                    <li>Blog</li>
                    <li>Andriod App</li>
                    <li>IOS App</li>
                </ul>
            </div>
        </>
    )
}

export default Mobileviews