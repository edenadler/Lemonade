import React, { Component }  from 'react';
import '../../assets/styles/index.css';
import Header from '../header';
import Title from './title';
import MainForm from './main-form';
import USMap from './map';
import Social from './social';
import Updates from './updates';
import Footer from '../footer';


class Main extends Component{
  render() {
    return (
      <div className="main-container">
        <Header location={this.props.location}></Header>
        <div className="landing-content">
          <Title></Title>
          <MainForm states={require('./us-states')}></MainForm>
          <USMap></USMap>
          <Social></Social>
          <Updates states={require('./us-states')}></Updates>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
