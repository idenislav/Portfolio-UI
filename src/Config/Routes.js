import React from "react";
import {Route, Switch} from  'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/ContactMe';
import Resume from '../Pages/Resume';
import List from '../Pages/List';


const Routes = () => {
    return (
        
        <Switch>
        <Route exact path='/' component ={() => <Home/>}/>
        <Route path='/projects' component ={() => <Projects/>}/>
        <Route path='/aboutMe' component ={() => <AboutMe/>}/>
        <Route path='/contactMe' component ={() => <ContactMe/>}/>
        <Route path='/resume' component ={() => <Resume/>}/>
        <Route path='/list' component ={() => <List/>}/>
        </Switch>
        
    );
};

export default Routes;