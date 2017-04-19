import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

var Header = React.createClass({
	getInitialState(){
		return {
			scroll: "main-header"
		}
	},
	componentWillMount(){
		if (this.props.location.pathname === "/"){
    		this.setState({scroll: "main-header"})
    	}
    	else if (this.props.location.pathname === "/faq"){
    		this.setState({ scroll: "main-header condensed"})
    	}
	},
	componentDidMount(){
		if (this.props.location.pathname === "/"){
			window.addEventListener('scroll',this.handleScroll);
		}
	},
	handleScroll(){
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 100;

		if (y_scroll_pos > scroll_pos_test){
		this.setState({ scroll: "main-header condensed"})
		}
		else {
			this.setState({ scroll: "main-header"})
		}
		
	},
	render(){
		return(
			<div className="main-header-wrap">
				<div className={this.state.scroll}>
					<ul className="header-menu">
						<li><Link to='/'>Home</Link></li>
						<li>Fundraise</li>
						<li><Link to='/faq'>FAQ</Link></li>
						<li>Blog</li>
					</ul>
					<a href="/" className="logo"><img src={require('./logo.svg')} alt="Lemonade" /></a>
					{this.state.scroll === "main-header condensed" ? <a className="btn btn-pink-enabled btn-standard check-prices">Check our Prices</a> : ""}
				</div>
			</div>
			)
	}
})

export default Header;