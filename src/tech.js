import React from 'react';

function Tech(props) {
    return (
        <div>
                <h1 class='title'>Technologies</h1>
                <div class='tech-grid'>
                    <div>
                    <h3 class='title'>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS/Sass</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div>
                    <h3 class='title'>Frameworks & Databases</h3>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>JQuery</li>
                    </ul>
                </div>
                <div>
                    <h3 class='title'>Software & Tools</h3>
                    <ul>
                        <li>AWS EC2</li>
                        <li>Git</li>
                        <li>npm</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>Trello</li>
                        <li>RESTful API Development</li>
                        <li>Heroku</li>
                        <li>Redis</li>
                    </ul>
                </div>
        </div>
            {props.return()}
        </div>
    )
}

export default Tech