import React from 'react';

import './style.css';

function Footer() {
    return (
        <div className="row">
            <small className="copyright"> &copy; Jarrod Bataille 2020</small>
            <ul className="social-network social-circle ml-auto">
                <li><a href="https://www.linkedin.com/in/jarrod-bataille-9154461aa/" target="_blank" rel="noopener noreferrer" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="mailto:jtbataille@gmail.com" className="icoMail" title="Mail"><i className="fa fa-envelope"></i></a></li>
                <li><a href="https://twitter.com/jtbataille" target="_blank" rel="noopener noreferrer" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/jtbataille" target="_blank" rel="noopener noreferrer" className="icoGitHub" title="GitHub"><i className="fa fa-github"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;