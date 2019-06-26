import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export class Navbar extends Component {

  makeLis = () => {
    return this.props.routes.map(route => (
      <NavLink to={`/${route.toLowerCase()}`} exact activeClassName='active'><span>{route}</span></NavLink>
    ))
  }
  render(){
    return(
      <div className='navbar'>
        <div></div>
        <NavLink to='/' exact activeClassName='active'><span>Portfolio</span></NavLink>
        {this.makeLis()}
      </div>
    )
  }
}