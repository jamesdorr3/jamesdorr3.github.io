import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Navbar} from './Components/Navbar'
import {Resume} from './Components/Resume'
import {About} from './Components/About'
import {Portfolio} from './Components/Portfolio'
import {Contact} from './Components/Contact'
import {Footer} from './Components/Footer'

const Routes = ['Portfolio','Resume','About','Contact']

// const clickContact = () => {
//   console.log('CONTACT!')
// }

ReactDOM.render((
  <Router>
    <Navbar routes={Routes}/>
    <div className='body'>
      <Portfolio />
      <Resume />
      <About />
      <Contact />
    </div>
    <Footer />
  </Router>),
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
