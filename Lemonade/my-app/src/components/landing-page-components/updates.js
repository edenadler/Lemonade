import React, { Component } from 'react';
import '../../assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Updates extends Component {
	render(){
		var states = this.props.states;

		var stateList = states.US_STATES.map(function(state, i) {
				          return state.name;
				        })

        var statesString = stateList.toString();

        var statesFinal = statesString.replace(/,/g, ", ");

		return(
			<div className="updates-container">
				<div className="coming-soon">
					<div className="coming-soon-title">We're coming soon to:</div>
					<div className="coming-soon-content">{statesFinal}</div>
				</div>
				<div className="divider"></div>
				<div className="follow-us">
					<img src={require('../../assets/images/logo_round.png')} alt="lemonade logo"/>
					<div className="follow-us-content">Follow us on <a className="follow-us-links">Facebook</a>or<a className="follow-us-links">Twitter</a> to stay updated on our roadmap!</div>
				</div>
			</div>
			)
	}
}

export default Updates;