import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Error404 from './Pages/Error404 ';
import Favorites from './Pages/Favorites ';
import Home from './Pages/Home';
import Popular from './Pages/Popular ';
import PopularBattle from './Pages/PopularBattle ';
import Weekly from './Pages/Weekly ';
import WeeklyBattle from './Pages/WeeklyBattle';
// import Card from './Components/Card';
import './App.css'



class App extends Component {
  render() {
    return (
      <div>


        <BrowserRouter>
          
            <div className='navigation'>              
                <NavLink className='navLinkHome navLink' to='/'>Home</NavLink>
                <NavLink className='navLink' activeClassName='nav-active' to='/weekly'>Weekly</NavLink>
                <NavLink className='navLink' activeClassName='nav-active' to='/weekly-battle'>WeeklyBattle</NavLink>
                <NavLink className='navLink' activeClassName='nav-active' to='/popular'>popular</NavLink>
                <NavLink className='navLink' activeClassName='nav-active' to='/popular-battle'>popular-battle</NavLink>
                <NavLink className='navLink' activeClassName='nav-active' to='/favorites'>favorites</NavLink>              
            </div>
         
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/weekly' component={Weekly} />
            <Route exact path='/weekly-battle' component={WeeklyBattle} />
            <Route exact path='/popular' component={Popular} />
            <Route exact path='/popular-battle' component={PopularBattle} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='*' component={Error404} />
          </Switch>


        </BrowserRouter>

      </div>
    );
  }
}

export default App;