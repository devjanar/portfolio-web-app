import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {connect} from "react-redux";
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css';

const App=({...props})=> {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      </Router>
  );
};

function mapStateToProps(state){
  return {state:state}
}

export default connect(mapStateToProps)(App);