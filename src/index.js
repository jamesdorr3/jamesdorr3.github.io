import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Navbar} from './Components/Navbar'
import {Resume} from './Components/Resume'
import {About} from './Components/About'
import {Portfolio} from './Components/Portfolio'
import {Home} from './Components/Home'
import {Contact} from './Components/Contact'
import Test from './Components/ScrollProgressBar'
import {Footer} from './Components/Footer'

import {HashLink as Link} from 'react-router-hash-link'

const Routes = ['Portfolio','Resume','About','Contact']

const clickContact = () => {
  console.log('CONTACT!')
}

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
