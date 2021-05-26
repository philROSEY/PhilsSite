import React from 'react';

function Contact(props) {
    return (
        <div>
            <h1 class='title'>Contact Info</h1>
            <div class='contact-container'>

                
                <div class='one'>
                    <h3>Email</h3>
                    philrosey85@gmail.com
                </div>
                <div class='two'>
                    <h3>Phone</h3>
                    1(617)970-4188
                </div>
                <div class='three'>
                    <a href='https://github.com/philROSEY'>Git Hub</a>
                </div>
                <div class='four'>
                    <a href='https://www.linkedin.com/in/philip-rosenberg-62a89a89/'>LinkedIn</a>
                </div>
            </div>
            {props.return()}
        </div>
    )
}

export default Contact