import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/landing-page-components/main';
import './assets/styles/index.css';
import Faq from './components/faq-components/frequently-asked-questions';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
  <BrowserRouter>
  	<div>
  		<Route exact path="/" component={Main}/>
  		<Route path="/faq" component={Faq}/>
  	</div>
  </BrowserRouter>
  ), document.getElementById('root')
);