/**
 * Created by AVINASH on 5/19/2017.
 */

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import images from './images/1.JPG'

class project1 extends Component {
    render() {
        return (
            <div className="project1">
                <div className="navbr">
                    <div className="myNav">
                        <div className="logo flotLft">
                            <h1 className="navH1">Abinash</h1>
                            <small className="">Service Apartment & Suites</small>
                        </div>
                        <div id="dropForm" className="ffrc flotRt homeContct w230px text_upper mrgn_top"  >
                            <a className="them_btn theme_bg_color"><span><FontAwesome Name="bolt" />&nbsp;Book NOW</span></a>
                        </div>
                        <ul className="navLst flotRt">
                            <a href="#"><li>
                                Home
                            </li>
                            </a>
                            <li>Book Room
                                <div className="dorpDwn">
                                    <a>menu  </a>
                                    <a>menu list 1 </a>
                                    <a>menu 1 </a>
                                    <a>menu list 1 </a>
                                    <a>menu </a>
                                </div>
                            </li>
                            <li>About Us
                                <div className="dorpDwn">
                                    <a>menu list 1 </a>
                                    <a>menu list 1 </a>
                                    <a>menu list 1 </a>
                                    <a>menu list 1 </a>
                                    <a>menu list 1 </a>
                                </div>
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>

                    </div>
            </div>
                <img src={images} />
            </div>
        );
    }
}

export default project1;