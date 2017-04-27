import React from 'react';
import '../../assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

var MainForm = React.createClass({
	getInitialState(){
		return {invalidEmail: "disabled", dropdown: "California", button: "btn btn-standard btn-pink-disabled"}
	},
	validateEmail(e){ 
		 if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){  
		    this.setState({
		    	invalidEmail: false, button: "btn btn-standard btn-pink-enabled"
		    })
		  }
		  else{
		  	this.setState({invalidEmail: true, button: "btn btn-standard btn-pink-disabled"})
		  }
	},
	selectedState(e){
		this.setState({dropdown: e.target.innerHTML});
	},
	render(){

        var states = this.props.states;

		var stateList = states.US_STATES.map(function(state, i) {
				          return <li key={i}><a href="#">{state.name}</a></li>;
				        })

		return(
				<div className="register-form">
					<form className="form-inputs">
						<div className="dropdown">
						  <button className="btn btn-default dropdown-toggle" type="button" id="state-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						    {this.state.dropdown}
						    <div className="divider"></div>
						    <span className="caret caret-state"></span>
						  </button>
						  <ul className="dropdown-menu" aria-labelledby="state-dropdown" onClick={this.selectedState}>
						  	{stateList}
						  </ul>
						</div>
						<div className="divider"></div>
						<input className="form-control" type="email" onKeyUp={this.validateEmail} placeholder="MY EMAIL"></input>
						<div className="divider"></div>
						<button type="submit" className={this.state.button} disabled={this.state.invalidEmail}>LET ME KNOW</button>
					</form>
				</div>
			)
	}
})

export default MainForm;