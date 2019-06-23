import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export class Navbar extends Component {

  makeLis = () => {
    return this.props.routes.map(route => (
      <NavLink to={`/${route.toLowerCase()}`} exact activeStyle={{background:'darkblue'}}>{route}</NavLink>
    ))
  }
  render(){
    return(
      <div className='navbar'>
        <div>James Dorr</div>
        <NavLink to='/' exact activeStyle={{background:'darkblue'}}>Portfolio</NavLink>
        {this.makeLis()}
      </div>
    )
  }
}