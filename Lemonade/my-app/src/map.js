import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class USMap extends Component {
	render(){
		return(
			<div className="map-container">
				<img src={require('./us-map.png')} alt="US Map"/>
				<div className="sonar-emitter">
					<div className="sonar-wave"></div>
				</div>
			</div>
			)
	}
}

export default USMap;