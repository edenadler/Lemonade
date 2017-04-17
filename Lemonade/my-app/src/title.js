import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Title extends Component {
	render(){
		return(
				<div className="row">
					<div className="main-heading">Lemonade is coming</div>
					<div className="subheader">During 2017 we will gradually launch across the United States!<br/>Be the first to know when we arrive to your state.</div>
				</div>
			)
	}
}

export default Title;