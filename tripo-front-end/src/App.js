import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MulThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './App.css';
import Landing from './Landing/Landing';
import Upcoming from './Upcoming/Upcoming';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MulThemeProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/landing" component={Landing} />
            <Route path="/upcoming" component={Upcoming} />
            <Route component={NotFound} />
          </Switch>
        </MulThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
