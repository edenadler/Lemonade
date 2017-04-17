import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class FaqMenu extends Component {
	constructor(props){
		super(props)
		this.state ={
			activeIndex: "0"
		}
	}
	handleMenuClick(){
		console.log(this.id);
		this.setState({
			activeIndex: this.id
		})
	}
	
	render(){

		return(
			<nav className="faq-menu" style={this.props.navScroll === "shrink" ? {top: "-62px", position: "fixed"}: {}}>
				<ul>
					<li><a id="0" href="#service" className={this.state.activeIndex === "0" ? 'selected' : ""}>About Lemonade</a></li>
					<li><a id="1" href="#policy" className={this.state.activeIndex === "1" ? 'selected' : ""}>Policy Stuff</a></li>
					<li><a id="2" href="#claims" className={this.state.activeIndex === "2" ? 'selected' : ""}>Claims</a></li>
					<li><a href="#"><span>Insurance, Explained</span></a></li>
					<li><a href="#"><span>Giveback and community</span></a></li>
				</ul>
			</nav>
			)
	}
}

export default FaqMenu;