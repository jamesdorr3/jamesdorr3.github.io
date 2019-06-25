import React from 'react'

export const Footer = () => {
  return(
    <>
      <div className='fullNameContainer1'>
        <div className='full name'>
          <span className='first name'>
            <span className='firstLetter'>J</span>
            <span className='rest'>ames</span>
          </span>
          <span className='middle name'>
            <span className='firstLetter'>E</span>
            <span className='rest'>dward</span>
          </span>
          <span className='last name'>
            <span className='firstLetter'>D</span>
            <span className='rest'>orr</span>
          </span>
          <span className='suffix name'>
            <span className='firstLetter'>I</span>
            <span className='rest'>II</span>
          </span>
        </div>
      </div>
      <div className='footerContainer1'>
        <ul className='footer'>
          {['React','Ruby on Rails','Redux','JavaScript'].map((x, i) => (
          <li className={'li' + (i)}>{x}</li>
          ))}
        </ul>
      </div>
    </>
  )
}