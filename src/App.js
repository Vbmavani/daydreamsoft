import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Signup from './component/Signup';
import { Switch, Route } from 'react-router-dom'
// import {userLogin } from './store/actions/auth.action';

// var routes = [
//   {
//     path: "/",
//     name: "HomePage",
//     component: HomePage,
//     layout: "/",
//     //auth:"user Admin"
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },
//   {
//     path: "/signup",
//     name: "SignUp",
//     component: Signup,
//   },
//   {
//     path: "*",
//     component: () => <div>ERROR-404</div>
//   }
// ];

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path = '/dashboard' exact component={Dashboard} />
      </Switch>
      
    </div>
  );
}

export default App;
