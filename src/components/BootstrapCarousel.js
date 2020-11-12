import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import DogDays from '../imgs/DogDays.png';
import palateProwler from '../imgs/palateProwler.png';
import codeFillerImg from '../imgs/codeFillerImg.png';

function BootstrapCarousel() {
    <div className="container-fluid">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={DogDays}
                    alt="Dog Day App"
                />
                <Carousel.Caption>
                    <h5 className="text-dark">Dog Days, Inc.</h5>
                    <p className="text-dark">This app allows to search and find their dream dogs from anywhere all over the country!</p>
                    <p className="text-dark">Technologies: JavaScript, jQuery, Bootstrap, HTML5, CSS3, APIs</p>
                    <a href="https://github.com/jtbataille/Dream-Dog-App">
                        <i className="fa fa-github fa-lg"></i>
                    </a>
                    <span className="ml-3"><a href="https://vkalaparthy.github.io/2020-Project1/">
                        <i className="fa fa-laptop fa-lg"></i>
                    </a></span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={palateProwler}
                    alt="Palate Prowler Application"
                />
                <Carousel.Caption>
                    <h5 className="text-dark">Palate Prowler</h5>
                    <p className="text-dark">This app allows users to create, view, and delete food trucks to chow down during COVID-19!</p>
                    <p className="text-dark">Technologies: MySQL, Sequelize, Node.js, Express.js, JavaScript, jQuery, Bootstrap</p>
                    <a href="https://github.com/jtbataille/Palate-Prowler-App">
                        <i className="fa fa-github fa-fw fa-lg"></i>
                    </a>
                    <span className="ml-3"><a href="https://team-project-ii.herokuapp.com/">
                        <i className="fa fa-laptop fa-lg"></i>
                    </a></span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={codeFillerImg}
                    alt="Code Filler Img"
                />
                <Carousel.Caption>
                    <h5 className="text-dark">Project 3</h5>
                    <p className="text-dark">This application will most likely solve all the world's problems, but I must build it first!</p>
                    <p className="text-dark">Technologies: This project is a work in progress!</p>
                    <a href="https://github.com/jtbataille">
                        <i className="fa fa-github fa-fw fa-lg"></i>
                    </a>
                    <span className="ml-3"><a href="/portfolio">
                        <i className="fa fa-laptop fa-lg"></i>
                    </a></span>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default BootstrapCarousel;