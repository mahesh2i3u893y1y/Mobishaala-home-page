import ReactPlayer from "react-player"
import { FaWhatsapp } from "react-icons/fa6";
import { TfiHandPointRight } from "react-icons/tfi";
import "./index.css"

const Desktopview = () =>{
    return(
        <div className="desktop-container">
            <div className="sub-container">
                <h1 className="head">Mobishaala</h1>
                <p className="content-ele">Create your <span className="span-ele"> Digital Classroom </span> in 5 mins for <span className="span-ele">
                FREE</span> & connect to 1+ Million Students.</p>
                <p className="properties"><TfiHandPointRight/>  No Technical Knowledge required.</p>
                <p className="properties"><TfiHandPointRight/>  Quickly setup pve classes,tests,notes,ebboks and more.</p>
                <p className="properties"><TfiHandPointRight/>  Reach out to milpon of students anywhere,anytime</p>
                <p className="para-ele">Institute/Teacher</p>
                <button className="button-ele">Get Started</button>
                <p className="para-ele">Student</p>
                <button className="button-ele">Download App</button>
                <button className="button-whats"><FaWhatsapp/> Talk to Us</button>
            </div>
            <div className="viedo-container">
                <ReactPlayer url="https://youtu.be/jg5d59ligW4?si=iLXtJw5bFOAfmW9t" className="viedo-ele" controls autoloop/>
                <button className="button-ele">Buy</button>
            </div>
        </div>
    )
}

export default Desktopview