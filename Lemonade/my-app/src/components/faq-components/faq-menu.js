import React from 'react';
import '../../assets/styles/index.css';

var FaqMenu = React.createClass({
	getInitialState(){
		return{
			activeIndex: "0"
		}
	},
	componentDidMount(){
	    window.addEventListener('scroll', this.handleScroll);
	  },
	handleMenuClick(e){
		this.setState({
			activeIndex: e.target.id
		})
	},
	handleScroll(){
		if (this.props.location.hash === "#service" || this.props.location.hash === ""){
			this.setState({ 
				activeIndex: "0"
			})
		}
		else if (this.props.location.hash === "#policy"){
			this.setState({
				activeIndex: "1"
			})
		}
		else if (this.props.location.hash === "#claims"){
			this.setState({
				activeIndex: "2"
			})
		}
	},
	render(){
		return(
			<div>
				<nav className="faq-menu" style={this.props.navScroll === "shrink" ? {top: "-62px", position: "fixed"}: {}}>
					<ul role="tablist">
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