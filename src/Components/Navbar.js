import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export const Navbar = (props) => {

  const makeLis = () => {
    return props.routes.map(route => (
      <NavLink to={`/${route.toLowerCase()}`} exact activeStyle={{background:'darkblue'}}>{route}</NavLink>
    ))
  }

  console.log(props.routes)
  return(
    <div className='navbar'>
      <div>James Dorr</div>
      {makeLis()}
    </div>
  )
}