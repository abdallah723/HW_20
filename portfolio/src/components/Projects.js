import React from 'react';
import '../App.css';
import './styles/Projects.css'

function Projects () {
    return (
        <div className="contianer projects-container">
            <div className="row">
                <div className="col" id="card-col">
                    <div className="card projects-card">
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">BandiFi</h5>
                            <p className="card-text">A simple application that allows the user to search for possible upcoming events of their favorite and related artists.</p>
                            <a href="https://kcbobbe.github.io/project1/" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text">Brief description of App.</p>
                            <a href="github link" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Management System</h5>
                            <p className="card-text">Brief description of App.</p>
                            <a href="github link" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card projects-card">
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 className="card-title">Quest For The Net!</h5>
                            <p class="card-text">Brief description of App.</p>
                            <a href="github link" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Fitness Tracker</h5>
                            <p className="card-text">Brief description of App.</p>
                            <a href="github link" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card projects-card">
                    <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Motivate Me</h5>
                            <p class="card-text">Coming Soon</p>
                            <a href="github link" class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;