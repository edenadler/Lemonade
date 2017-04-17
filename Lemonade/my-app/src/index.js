import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Main from './main';
import './index.css';
import Faq from './frequently-asked-questions';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
  <HashRouter>
  	<div>
  		<Route exact path="/" component={Main}/>
  		<Route path="/faq" component={Faq}/>
  	</div>
  </HashRouter>
  ), document.getElementById('root')
);