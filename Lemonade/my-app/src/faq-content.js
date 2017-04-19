import React from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

var FaqContent = React.createClass({
	getInitialState(){
		return {scrollTop: "btn-scroll-top"}
	},
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	},
	scrollTop(){
		window.scrollTo(0,0)
	},
	handleScroll(){
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_btn = 200;

		if (y_scroll_pos > scroll_pos_btn){
		this.setState({ scrollTop: "btn-scroll-top active"})
		}
		else {
			this.setState({ scrollTop: "btn-scroll-top"})
		}
	},
	render(){
		return(
			<div className="faq-inner-wrap" style={this.props.navScroll === "shrink" ? {top: "210px", paddingBottom: "210px"}: {}}>
				<a href="#faq" className={this.state.scrollTop} onClick={this.scrollTop}></a>
				<Route exact path="/faq#service" children={()=>(
					<section className="faq-section section-1" id="service">
					<div className="inner">
						<h2>About Lemonade</h2>
						<p>Lemonade Insurance Company is a property and casualty insurance company that is transforming the very business model of insurance. By injecting technology and transparency into an industry that often lacks both, we’re creating an insurance experience that is fast, affordable and hassle free. Unlike any other insurance company, we gain nothing by delaying or denying claims (we take a flat fee!), so we handle and pay most claims instantly.</p>
						<h3>How is Lemonade’s business different from that of a traditional insurance carrier?</h3>
						<p>Traditional insurance companies make money by keeping the money they don’t pay out in claims. This means whenever they pay your claim, they lose profit. This is why getting your claims paid fast and in full is sometimes so hard.</p>
						<p>Lemonade was built differently. We take a fixed fee out of your monthly payments, pay reinsurance (and some unavoidable expenses) and use the rest for paying out claims. In essence, we treat premiums as if they were still your money and return unclaimed remainders in our annual 'Giveback'. Giveback is a unique feature of Lemonade, where each year leftover money is donated to causes our policyholders care about. We treat policyholders who care about the same causes as virtual groups of 'peers'. Lemonade uses the premiums collected from each peer group to pay for the group's claims, giving back any leftover money to their common cause, and uses reinsurance to cover for cases where the group's
            claims exceed what's left in the pool. This way, our customers enjoy amazing insurance, and society gets a little push for the better. It also means that, unlike traditional insurance companies, we're not in conflict with our customers, so we're happy to pay claims fast and with no hassle.</p>
						<h3>Is the Giveback guaranteed?</h3>
						<p>No. Giveback is part of our policy, and it is our plan to pay it every year. Sometimes, peer groups will not have any money left to giveback because the claim they paid depleted the giveback pool. Paying claims is our top priority, and in extreme circumstances could come at the expense of the Giveback.</p>
					</div>
				</section>
				)}/>
				<Route exact path="/faq#policy" children={()=>(
				<section className="faq-section section-2" id="policy">
					<div className="inner">
						<h2>Policy Stuff</h2>
						<h3>How do I know what my policy covers?</h3>
						<p>You get to see a summary of your coverage and a sample of a policy when you sign up, and before you pay. You’ll also be able to edit your coverage and other policy settings such as the deductible, start dates and more. After payment, we will instantly issue your final policy and send it to you by email.</p>
						<h3>How do you calculate my premium?</h3>
						<p>Premiums are calculated individually for each policyholder and are based on a number of different factors including your credit history, recent claims and information about your property including its age, size, and construction quality. We also factor in the sensitivity of your home to windstorms, severe weather damage, and fires. We then provide discounts for protection equipment you may have installed, such as fire and burglar alarms.</p>
					</div>
				</section>
				)}/>
				<Route exact path="/faq#claims" children={()=>(
				<section className="faq-section section-3" id="claims">
					<div className="inner">
						<h2>Claims</h2>
						<h3>How do I file a claim?</h3>
						<p>Easy! Just open the Lemonade app and hit the Claim button. We will guide you through the rest of the short process there.</p>
						<h3>How fast will a claim be paid?</h3>
						<p>After you complete the claim report on the Lemonade app, you will be asked to enter your bank account wire information. Once your claim is approved, we’ll issue payment, minus the amount of the deductible, directly into your account.</p>
					</div>
				</section>
				)}/>
			</div>
			)
	}
})

export default FaqContent;