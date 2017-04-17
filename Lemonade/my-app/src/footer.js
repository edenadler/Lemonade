import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component {
	render(){
		return(
			<div className="footer-container">
				<ul className="footer-menu">
					<li>Terms Of Service</li>
					<li>Privacy Policy</li>
					<li>Legal Stuff</li>
					<li>Lemonade Nationwide</li>
				</ul>
				<p className="legal">
                    © Lemonade Insurance Agency, LLC
                    <br/>
                    Insurance provided by Lemonade Insurance Company, 85 Broad Street, New York, NY 10004
                </p>
			</div>
			)
	}
}

export default Footer;