import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props => <Home {...props}/>}/>
      <Route path="/login" render={props => <Login {...props}/>}/>
      <Route path="/register" render={props => <Register {...props}/>}/>
      <PrivateRoute exact path="/users" component={Users}/>
    </div>
  );
}

export default App;
