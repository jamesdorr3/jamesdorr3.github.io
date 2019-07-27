import React from 'react'

const handleClick = () => {
  const nameContainer = document.querySelector('.fullNameContainer')
  const footerContainer = document.querySelector('.footerContainer')
  nameContainer.classList.remove('fullNameContainer')
  footerContainer.classList.remove('footerContainer')
  void nameContainer.offsetWidth;
  void footerContainer.offsetWidth;
  nameContainer.classList.add('fullNameContainer')
  footerContainer.classList.add('footerContainer')
}

export const Footer = () => {
  return(
    <>
      <div innerRef='fullNameContainer' className='fullNameContainer'>
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
      <div className='footerContainer' innerRef='footerContainer'>
        <ul className='footer'>
          {['React','Ruby on Rails','Redux','JavaScript'].map((x, i) => (
          <li className={'li' + (i)}>{x}</li>
          ))}
        </ul>
      </div>
    </>
  )
}