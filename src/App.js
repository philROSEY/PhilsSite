import React from "react";
import { hot } from 'react-hot-loader/root';
import Tech from './tech'
import About from './about'
import Contact from './contact'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            tech: false,
            about: false,
            contact: false
        }
        this.returnHome = this.returnHome.bind(this)
    }

    homePage() {
        if (this.state.home === true) {
            return (
                <>
                    <h1 class='title'>
                        Welcome To Philip's Site!
                    </h1>
                    <img class='image' src='https://media-exp1.licdn.com/dms/image/C4D03AQGR44vttiSNTA/profile-displayphoto-shrink_800_800/0/1614004236383?e=1627516800&v=beta&t=KYSLBJlVU4XdFuyNEk_pE_R7heKW7uSBKXkBc2p9n3M' alt="It's Phil"></img>
                    <div class='home-container'>
                        <div class='one title' onClick={() => {this.setState({
                            home: false,
                            tech: true,
                            about: false,
                            contact: false
                        })}}><h3>Technologies</h3></div>
                        <div class='two title' onClick={() => {this.setState({
                            home: false,
                            tech: false,
                            about: true,
                            contact: false
                        })}}><h3>About</h3></div>
                        <div class='three title' onClick={() => {this.setState({
                            home: false,
                            tech: false,
                            about: false,
                            contact: true
                        })}}><h3>Contact</h3></div>
                    </div>
                </>
            )
        }
    }

    returnHome() {
        return (
            <div class='return-home' onClick={() => {this.setState({
                        home: true,
                        tech: false,
                        about: false,
                        contact: false
            })}}>
                Return to Home Page
            </div>
        )
    }

    display() {
        if (this.state.tech === true) {
            return (
                <>
                    <Tech return={this.returnHome}/>
                </>
            )
        }
        if (this.state.about === true) {
            return (
                <>    
                    <About return={this.returnHome}/>
                </>
            )
        }
        if (this.state.contact === true) {
            return (
                <>        
                    <Contact return={this.returnHome}/>
                </>
            )
        }
    }

    
    render() {
        return (
            <>
                {this.homePage()}
                {this.display()}
            </>
        )
    }
}

export default App;