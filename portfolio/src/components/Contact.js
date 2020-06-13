import React from "react";
import "./styles/Projects.css";
import Headshot from "../imgs/headshot.png";

function Contact() {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "640px" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={Headshot} className="card-img" alt="..." style={{ width: "240px", height: "350px" }}></img>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Ways you can reach me:</h5>
                    <p className="card-text">Email: ibrham11@gmail.com</p>
                    <p className="card-text">Phone #: (919)-601-9901</p>
                    <a href="https://www.linkedin.com/in/abd-alla-ibrahim-4584011b0/" className="btn btn-primary">LinkedIn</a>
                    <br></br>
                    <br></br>
                    <a href="https://github.com/abdallah723" className="btn btn-primary">GitHub</a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;