import React, { Component } from 'react';
import '../../assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Social extends Component {
	render(){
		return(
			<div className="social-container">
				<div className="call-to-action">Tell your friends</div>
				<div className="share-buttons">
					<div className="share-button facebook">
						<i className="fa fa-facebook" aria-hidden="true"></i>
					</div>
					<div className="divider"></div>
					<div className="share-button linkedin">
						<i className="fa fa-linkedin" aria-hidden="true"></i>
					</div>
					<div className="divider"></div>
					<div className="share-button twitter">
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</div>
				</div>
				<div className="social-update">Read more about our nationwide expansion</div>
			</div>
			)
	}
}

export default Social;