import React from 'react'

export const Contact = () => {
  return(
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <p>James Edward Dorr III</p>
      <p><a href='mailto:jamesdorr3@gmail.com'>jamesdorr3@gmail.com</a></p>
      <div className='socialMedia'>
        <a href='https://github.com/jamesdorr3' target="_blank" rel="noopener noreferrer"><img alt="logo for GitHub" src='GitHub-Mark-120px-plus.png' className='logo'/></a>
        <a href='https://www.linkedin.com/in/jamesdorr3/' target="_blank" rel="noopener noreferrer"><img alt="logo for LinkedIn" src='LI-In-Bug.png' className='logo'/></a>
        <a href='https://medium.com/@jamesdorr3' target="_blank" rel="noopener noreferrer"><img alt="logo for Medium" src='medium-icon.png' className='logo'/></a>
      </div>
    </div>
  )
}