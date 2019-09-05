import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/ContactMe';

const Routes = () => {
    return (
        <>
        <Route exact path='/' component ={() => <Home/>}/>
        <Route path='/Projects' component ={() => <Projects/>}/>
        <Route path='/AboutMe' component ={() => <AboutMe/>}/>
        <Route path='/ContactMe' component ={() => <ContactMe/>}/>
        </>
    );
};

export default Routes;