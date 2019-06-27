import React, {Component} from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'

export class Navbar extends Component {

  makeLis = () => {
    return this.props.routes.map(route => (
      <NavLink smooth to={`/#${route.toLowerCase()}`} exact activeClassName='active'><span>{route}</span></NavLink>
    ))
  }
  render(){
    return(
      <div className='navbar'>
        <div></div>
        {this.makeLis()}
      </div>
    )
  }
}