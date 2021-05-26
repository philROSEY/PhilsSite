import React from 'react';

function About(props) {
    return (
        <div class='about-main'>
            <h1 class='title'>About Me</h1>
            Dynamic and innovative professional with a sharp technical acumen,<br></br>
            passion for software engineering, and project-based experience.<br></br>
              Looking for a software engineering role in the Greater Boston Area- front-end, back-end, or full-stack.<br></br><br></br>
            {props.return()}
        </div>
    )
}

export default About