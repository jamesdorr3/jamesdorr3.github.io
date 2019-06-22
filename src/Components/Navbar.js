import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export const Navbar = (props) => {

  const link={width:'100px',padding:'12px',margin:'0 6px 6px',background:'blue',textDecoration:'none',color:'white',}

  const makeLis = () => {
    return props.routes.map(route => (
      <NavLink to={`/${route.toLowerCase()}`} exact style={link} activeStyle={{background:'darkblue'}}>{route}</NavLink>
    ))
  }

  console.log(props.routes)
  return(
    <div>
      {makeLis()}
    </div>
  )
}