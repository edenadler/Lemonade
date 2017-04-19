import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

var FaqMenu = React.createClass({
	getInitialState(){
		return{
			activeIndex: "0"
		}
	},
	handleMenuClick(e){
		console.log("id2",e.target.id);
		this.setState({
			activeIndex: e.target.id
		})
	},
	
	render(){
		return(
			<div>
				<nav className="faq-menu" style={this.props.navScroll === "shrink" ? {top: "-62px", position: "fixed"}: {}}>
					<ul>
						<li><a href="#service" id="0" onClick={this.handleMenuClick} className={this.state.activeIndex === "0" ? 'selected' : ""}>About Lemonade</a></li>
						<li><a href="#policy" id="1" onClick={this.handleMenuClick} className={this.state.activeIndex === "1" ? 'selected' : ""}>Policy Stuff</a></li>
						<li><a href="#claims" id="2" onClick={this.handleMenuClick} className={this.state.activeIndex === "2" ? 'selected' : ""}>Claims</a></li>
						<li><a href="#"><span>Insurance, Explained</span></a></li>
						<li><a href="#"><span>Giveback and community</span></a></li>
					</ul>
				</nav>
			</div>
			)
	}
})

export default FaqMenu;