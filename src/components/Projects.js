import React from 'react';
import '../App.css';
import './styles/Projects.css';

import BandiFi from '../imgs/bandifi.png';
import TeamGenerator from '../imgs/teamgenerator-1.png';
import EmployeeSystem from '../imgs/employeesystem.png';
import QuestForNet from '../imgs/quest4net.png';
import FitnessTracker from '../imgs/fitnesstracker.png';
import MotivateMe from '../imgs/motivateme.png';



function Projects () {
    return (
        <div className= "container1">
        <div className="container projects-container">
            <div className="row">
                <div className="col" id="card-col">
                    <div className="card projects-card">
                    <img src={BandiFi} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">BandiFi</h5>
                            <p className="card-text">A simple application that allows the user to search for possible upcoming events of their favorite and related artists.</p>
                            <a href="https://kcbobbe.github.io/project1/" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src={TeamGenerator} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text">An application that allows the user to add individuals to their "team" based on their respective position along with their basic information.</p>
                            <a href="https://github.com/abdallah723/Team-Generator" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src={EmployeeSystem} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Management System</h5>
                            <p className="card-text">This application allows the user to create a system to add and or view their employees, roles, and or departments.</p>
                            <a href="https://github.com/abdallah723/Employee-Tracker" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card projects-card">
                    <img src={QuestForNet} className="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 className="card-title">Quest For The Net!</h5>
                            <p class="card-text">A simple application that allows the user to create their own fantasy basketball team from NBA's top players.</p>
                            <a href="https://vast-headland-47194.herokuapp.com/" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card projects-card">
                    <img src={FitnessTracker} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Fitness Tracker</h5>
                            <p className="card-text">This app allows the user to log and keep track of their workouts.</p>
                            <a href="https://rhumble-fitness-tracker.herokuapp.com/" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card projects-card">
                    <img src={MotivateMe} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Motivate Me</h5>
                            <p class="card-text">An application that allows the user to create personal goals and search YouTube videos.</p>
                            <a href="http://pacific-wave-23407.herokuapp.com/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects;