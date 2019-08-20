// import React, {Component} from 'react'

// let lastScrollY = 0;
// let ticking = false;

// export default class Test extends React.Component{

//   componentDidMount = () => {
//     console.log('mounted!')
//     document.addEventListener('scroll', e => {
//       console.log(e)
//     })
//   }

//   componentWillUnmount = () => {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   render(){
//     return(
//       <>
//       <nav ref={this.nav} />
//       <div className='scroll-progress-container'>
//         <div className='scroll-progress-bar'></div>
//       </div>
//       </>
//     )
//   }
// }