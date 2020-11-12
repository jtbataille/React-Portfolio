import React from 'react';

import Me from '../imgs/me.jpg';
// import jtbLogo from '../animations/jtbLogo.gif';

const Home = () => (
    <>  
        <div className="jumbotron text-center">
            <h1>Jarrod Bataille</h1>
            <img src={Me} alt="pic of me" />
        </div>

        {/* Tentative introduction regrading me and my coding "history" */}
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 pb-3">A bit about me . . .</h1>
                <div className="row">
                    <div className="col-md-4">
                        <img src={require('../animations/jtbLogo.gif')} alt="GIF of logo" width="95%" height="85%" />
                    </div>

                    <div className="col-md-8">
                        <p className="lead">Welcome to my site! My name is Jarrod Bataille, and I am a full-stack developer.</p>
                        
                        <p>I was drawn into the world of web development while working as an English teacher in China, Italy, and later in the United States. After seeing the disparities among groups of students and groups of adults with internet accessibility, the need I saw there kindled in me the fire of building programs and applications aimed at aiding in web literacy and access--something I consider to be critical for web development.</p>
                        
                        <p>With this passion for programming in mind, I hope you will see this passion in some of the many projects I have uploaded here. Please browse through the site, and send in any inquiries using the contact form!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Home;