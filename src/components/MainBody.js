import React from 'react';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export default function MainBody() {
    const titleStyles = {
        fontFamily: 'Jost',
        fontWeight: 200
    }

    const boxStyles = {
        paddingTop: '100px'
    }

    const mainBodyStyles = {
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'block',
        position: 'relative',
        paddingBottom: '100px' 
    }

    return (    
        <div id='main-body' style={mainBodyStyles}>
            <Switch>
                <Route path="/Contact">    
                    <Contact />
                </Route>
                <Route path="/About">    
                    <About />
                </Route>
                <Route path="/Portfolio">    
                    <Portfolio />
                </Route>
                <Route path="/Portfolio">    
                    <Portfolio />
                </Route>
                <Route path="/Resume">    
                    <Resume />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}