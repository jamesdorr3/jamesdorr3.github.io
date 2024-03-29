import React, {Component} from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'

export class Navbar extends Component {

  makeLis = () => {
    return this.props.routes.map(route => (
      <NavLink smooth key={route} to={`/#${route.toLowerCase()}`} className={window.location.hash === `#${route.toLowerCase()}` ? 'active' : null}><span>{route}</span></NavLink>
    ))
  }
  render(){
    return(
      <div className='navbar'>
        <div></div>
        {this.makeLis()}
        <div className="underbar"/>
      </div>
    )
  }
}