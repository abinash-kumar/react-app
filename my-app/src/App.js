import React, { Component } from 'react';
//import logo from './logo.svg';
import Nav from './Components/home/Nav';
import './App.css';
import  Material from './Components/home/Material';
import  FourPropList from './Components/home/FourPropList';
import  ThreeImageSec from './Components/home/ThreeImageSec';
import TestimonialSlids from './Components/home/TestimonialSlids';
import Footer from './Components/Comman-components/Footer';
import navlinks from './Components/home/dataBase';
//import fourSec from './Components/home/dataBase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



  class App extends Component {
    render() {
        var Cardtitels=['Each of our accommodation in Gurgaon,Delhi NCR and Goa has won awards; Most Promising Servic','Each of our accommodation in Gurgaon,' +
            'Delhi NCR and Goa has won awards; Most Promising Servic', 'Each of our accommodation in Gurgaon, Delhi NCR and Goa has won awards; Most Promising Servic','Each of our accommodation in Gurgaon,' +
            'Delhi NCR and Goa has won awards; Most Promising Servic'];
      return (
        <div className="App">
            <Nav />
            <MuiThemeProvider>
                <Material/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FourPropList Cardtitels={Cardtitels} />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <ThreeImageSec />
            </MuiThemeProvider>
            <TestimonialSlids />
            <Footer navlinks={navlinks} />
        </div>
      );
    }
  }

export default App;
