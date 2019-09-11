import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/ContactMe';
import List from '../Pages/List';




const Routes = () => {
    return (
        <>
        <Route exact path='/' component ={() => <Home/>}/>
        <Route path='/Projects' component ={() => <Projects/>}/>
        <Route path='/AboutMe' component ={() => <AboutMe/>}/>
        <Route path='/ContactMe' component ={() => <ContactMe/>}/>
        <Route path='/List' component ={() => <List/>}/>
        </>
    );
};

export default Routes;