import React from 'react';



const Portfolio = () => {
    <>
        <div className="container myCarousel">
            <h3>Team Applications</h3>
        
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block img-responsive" src="images/DogDays.png" alt="First slide" />
                    <div className="carousel-caption d-md-block">
                        <div className="layer">
                            <h5 className="text-dark">Dog Days, Inc.</h5>
                            <p className="text-dark">This app allows to search and find their dream dogs from anywhere all over the country!</p>
                            <p className="text-dark">Technologies: JavaScript, jQuery, Bootstrap, HTML5, CSS3, APIs</p>
                            <a href="https://github.com/jtbataille/Dream-Dog-App">
                                <i className="fa fa-github fa-lg"></i>
                            </a>
                            <span className="ml-3"><a href="https://vkalaparthy.github.io/2020-Project1/">
                                <i className="fa fa-laptop fa-lg"></i>
                            </a></span>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-responsive" src="images/palateProwler.png" alt="Second slide" />
                    <div className="carousel-caption d-md-block">
                        <div className="layer">
                            <h5 className="text-dark">Palate Prowler</h5>
                            <p className="text-dark">This app allows users to create, view, and delete food trucks to chow down during COVID-19!</p>
                            <p className="text-dark">Technologies: MySQL, Sequelize, Node.js, Express.js, JavaScript, jQuery, Bootstrap</p>
                            <a href="https://github.com/jtbataille/Palate-Prowler-App">
                                <i className="fa fa-github fa-fw fa-lg"></i>
                            </a>
                            <span className="ml-3"><a href="https://team-project-ii.herokuapp.com/">
                                <i className="fa fa-laptop fa-lg"></i>
                            </a></span>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-responsive" src="images/codeFillerImg.png" alt="Third slide" />
                    <div className="carousel-caption d-md-block">
                        <div className="layer">
                            <h5 className="text-dark">Project 3</h5>
                            <p className="text-dark">This application will most likely solve all the world's problems, but I must build it first!</p>
                            <p className="text-dark">Technologies: This project is a work in progress!</p>
                            <a href="https://github.com/jtbataille">
                                <i className="fa fa-github fa-fw fa-lg"></i>
                            </a>
                            <span className="ml-3"><a href="#">
                                <i className="fa fa-laptop fa-lg"></i>
                            </a></span>
                        </div>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

        <h3>Solo Applications</h3>

        {/* Accordion Element */}

        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header text-center" id="workoutTracker">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Workout Tracker
                    </button>
                </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="workoutTracker" data-parent="#accordionExample">
                <div className="card-body text-center">
                    <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Workout Tracker</span></h5>
                    <img src="animations/workoutApp.gif" alt="GIF of burger app" style={{width:"50%", height:"50%"}} />
                    <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This workout tracker application allows users to create and track daily workouts while logging multiple exercises per workout on any given day, enabling users to track the names, types, weights, sets, reps, and durations of their exercises.</span></p>
                    <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> MongoDB, Mongoose, Morgan, JavaScript, HTML, CSS, Heroku</span></p>
                    <a href="https://github.com/jtbataille/Workout-Tracker">
                        <i className="fa fa-github fa-lg"></i>
                    </a>
                    <span className="ml-3"><a href="https://blooming-island-78923.herokuapp.com/">
                        <i className="fa fa-laptop fa-lg"></i>
                    </a></span>
                </div>
                </div>
            </div>
            
            <div className="card">
                <div className="card-header text-center" id="burgerApp">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Eat-Da-Burger!
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="burgerApp" data-parent="#accordionExample">
                <div className="card-body text-center">
                    <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Eat-Da-Burger!</span></h5>
                    <img src="animations/burger.gif" alt="GIF of burger app" style={{width:"50%", height:"50%"}} />
                    <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This Node application uses an MVC model along with Handlebarsjs, Express.js, and ORM so that users may create a burger and *devour* it with the click of a button!</span></p>
                    <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> MySQL, JavaScript, Handlebarsjs, Express.js, Node.js, ORM, Heroku</span></p>
                    <a href="https://github.com/jtbataille/burger">
                        <i className="fa fa-github fa-lg"></i>
                    </a>
                    <span className="ml-3"><a href="https://desolate-wave-66580.herokuapp.com/">
                        <i className="fa fa-laptop fa-lg"></i>
                    </a></span>
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="employeeTrackerApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Employee Tracker
                    </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="employeeTrackerApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Employee Tracker</span></h5>
                        <video width="50%" height="50%" controls>
                            <source src="animations/employee-tracker-demo.mov" alt="Video of Employee Tracker" />
                            Your browsers does nont support the video tag. Please see my GitHub to view the application's video!
                        </video>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This CLI application will allow users to view all employees, rolls, and departments within their own companies using a MySQL database. Users can also add to and update these records at will!</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> MySQL, JavaScript, Inquirer, CLI, Console</span></p>
                        <a href="https://github.com/jtbataille/Employee-Tracker">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://drive.google.com/file/d/1YP3IS7sX6EKP-YMRIuVmYvzqTrhTICzu/view">
                            <i className="fa fa-video-camera fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="dayPlannerApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Day-To-Day Planner
                    </button>
                    </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="dayPlannerApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Day-To-Day Planner</span></h5>
                        <img src="animations/schedule.gif" alt="GIF of Day-To-Day Planner" style={{width:"50%", height:"50%"}} />
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This application allows users to plan out their days, saving input to Local Storage so that users can leave the page and come back to double-check. The application is also color-coded so that users can see at a glance what times have passed and what's coming up!</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> HTML5, CSS3, JavaScript, Moment.js</span></p>
                        <a href="https://github.com/jtbataille/Day-to-Day-Planner">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://jtbataille.github.io/Day-to-Day-Planner/">
                            <i className="fa fa-laptop fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="weatherApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Weather Dashboard
                    </button>
                    </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="weatherApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Weather Dashboard</span></h5>
                        <video width="50%" height="50%" controls>
                            <source src="animations/weatherDash.mov" alt="Video of Weather Dashboard" />
                            Your browsers does nont support the video tag. Please see my GitHub to view the application's video!
                        </video>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> With this application, users will be able to check weather anywhere around the world, saving their searches to Local Storage so that they may access them later!</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> HTML5, CSS3, JavaScript, APIs</span></p>
                        <a href="https://github.com/jtbataille/Weather-Application">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://jtbataille.github.io/Weather-Application/">
                            <i className="fa fa-laptop fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="teamWebsiteGenerator">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Team Website Generator
                    </button>
                    </h2>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="teamWebsiteGenerator" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Team Website Generator</span></h5>
                        <video width="50%" height="50%" controls>
                            <source src="animations/teamWeb.mov" alt="Video of Team Website Generator" />
                            Your browsers does nont support the video tag. Please see my GitHub to view the application's video!
                        </video>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> A CLI-based application used to create a website based on user-input of a workplace team so that duties, contact information, and job assignment can be clear for all who wish to see!</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> HTML5, CSS3, JavaScript, CLI, Node.js, Inquirer, Jest</span></p>
                        <a href="https://github.com/jtbataille/Team-Website-Generator">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://drive.google.com/file/d/1xcLXPE6eBcWV9yzThmnh3Kd1d_ZXav15/view">
                            <i className="fa fa-video-camera fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="noteApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Note-Taker Application
                    </button>
                    </h2>
                </div>
                <div id="collapseSeven" className="collapse" aria-labelledby="noteApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Note-Taker Application</span></h5>
                        <video width="50%" height="50%" controls>
                            <source src="animations/noteTakerApp.mov" alt="Video of Note-Taker App" />
                            Your browsers does nont support the video tag. Please see my GitHub to view the application's video!
                        </video>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This application allows users to take, save, and review notes for reminders, recipes, tips and tricks, or anything else one might nneed to remember!</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> HTML5, CSS3, JavaScript, Express.js, Heroku</span></p>
                        <a href="https://github.com/jtbataille/Note-Taker-App">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://vast-caverns-96839.herokuapp.com/">
                            <i className="fa fa-laptop fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header text-center" id="readmeApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        README Generator
                    </button>
                    </h2>
                </div>
                <div id="collapseEight" className="collapse" aria-labelledby="readmeApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>README Generator</span></h5>
                        <img src="animations/readmeGen.gif" alt="GIF of README Generator" style={{width:"50%", height:"50%"}} />
                        <p className="mt-3"><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This CLI-based application can be used to auto-generate a README.md file for users who just need to pump these out for all of their application building! The generated README.md file will contain the following sections: title, license banner, description, table of contents, installation, usage, license, contributors, tests, and contacts information</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> Node.js, JavaScript, Inquirer</span></p>
                        <a href="https://github.com/jtbataille/README-Generator">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://drive.google.com/file/d/1SD1qOwN0psHxVKjecJ3_Z7yH2igEnlpA/view">
                            <i className="fa fa-video-camera fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-center" id="passwordGeneratorApp">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        Password Generator
                    </button>
                    </h2>
                </div>
                <div id="collapseNine" className="collapse" aria-labelledby="passwordGeneratorApp" data-parent="#accordionExample">
                    <div className="card-body text-center">
                        <h5><span style={{fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:"bold", fontSize:"24px"}}>Password Generator</span></h5>
                        <video width="50%" height="50%" controls>
                            <source src="animations/passwordGen.mov" alt="Video of Weather Dashboard" />
                            Your browsers does nont support the video tag. Please see my GitHub to view the application's video!
                        </video>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Description:</span> This application will generate a complex password based on user-specified parameters such as which characters to include and length.</span></p>
                        <p><span style={{fontFamily:"'IBM Plex Sans',sans-serif"}}><span style={{textDecoration:"underline", fontWeight:"bold"}}>Technologies Used:</span> HTML5, CSS3, JavaScript</span></p>
                        <a href="https://github.com/jtbataille/Password-Generator-Application">
                            <i className="fa fa-github fa-lg"></i>
                        </a>
                        <span className="ml-3"><a href="https://jtbataille.github.io/Password-Generator-Application/">
                            <i className="fa fa-laptop fa-lg"></i>
                        </a></span>
                    </div>
                </div>
            </div>

        </div>

        <div className="container mb-3">

            <h3>Technical Skills</h3>

            <div className="row">
                
                <div className="col-md-3">
                    <div className="card bg-dark skillBox">
                        <h5 className="card-header text-center text-light">Front-End</h5>
                        <div className="card-body">
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">HTML5</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">CSS3</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Handlebars</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">jQuery</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-dark skillBox">
                        <h5 className="card-header text-center text-light">Back-End</h5>
                        <div className="card-body">
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Node.js</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Express.js</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MySQL</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Sequelize ORM</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width:"35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:"30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">Mongoose</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-dark skillBox">
                        <h5 className="card-header text-center text-light">Design</h5>
                        <div className="card-body">
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">Graphic Design</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width:"35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">Illustrator</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card bg-dark skillBox">
                        <h5 className="card-header text-center text-light">Additional</h5>
                        <div className="card-body">
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Collaboration</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Mac OS</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Windows OS</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Microsoft Office</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width:"98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">GitHub</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:"95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Spanish</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{width:"95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Italian</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">French</div>
                            </div>
                            <div className="progress m-2" style={{height:"30px"}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width:"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">German</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Portfolio;