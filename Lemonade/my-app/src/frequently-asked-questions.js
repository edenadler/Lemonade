import React, { Component } from 'react';
import './index.css';
import Header from './header';
import Footer from './footer';
import FaqMenu from './faq-menu';
import FaqContent from './faq-content';
import {HashRouter, Route} from 'react-router-dom';
import ScrollIntoView from './scrollIntoView';

var Faq = React.createClass({
  getInitialState(){
    return {scroll: "normal"}
  },
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll(){
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_nav = 120;

    if (y_scroll_pos > scroll_pos_nav){
    this.setState({ scroll: "shrink"})
    }
    else {
      this.setState({ scroll: "normal"})
    }
  },
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-content">
          <Header location={this.props.location}></Header>
          <FaqMenu navScroll={this.state.scroll}></FaqMenu>
          <FaqContent navScroll={this.state.scroll}></FaqContent>
          <Footer></Footer>
        </div>
      </div> 
    );
  }
})

export default Faq;
