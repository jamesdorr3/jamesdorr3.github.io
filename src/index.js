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

const Routes = ['Resume','About','Contact']

const clickContact = () => {
  console.log('CONTACT!')
}

ReactDOM.render((
  <Router>
    <Navbar routes={Routes}/>
    <div className='body'>
      <Route exact path={'/'} render={Portfolio} />
      <Route exact path='/resume' render={Resume} />
      <Route exact path='/about' render={About} />
      <Route exact path='/contact' render={Contact}/>
    </div>
    <Footer />
  </Router>),
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
