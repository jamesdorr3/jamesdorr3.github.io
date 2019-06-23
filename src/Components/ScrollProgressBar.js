import React, {Component} from 'react'

export default class Test extends React.Component{

  componentDidMount = () => {
    console.log('mounted')
  }
  
  render(){
    return(
      <div className='scroll-progress-container'>
        <div className='scroll-progress-bar'></div>
      </div>
    )
  }
}