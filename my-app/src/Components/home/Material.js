/**
 * Created by AVINASH on 5/19/2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var FontAwesome = require('react-fontawesome');

const CardExampleExpandable = () => (
    <div className="section2">
        <h2>Luxury Service Apartments in Gurgaon & Guest Houses</h2>
        <p>Serviced Apartments - Ideal for expat relocation, family long stay in Gurgaon,
            Japanese guests & medical visitors. 1/2/3 Bedroom & Studio Service Apartments.
            Guest Houses - Perfect for corporate accommodation in Gurgaon, short visits,
            tourists visiting Gurgaon or Delhi, students & social travelers.
            Great for business executives and a cost effective alternative to Hotels in Gurgaon</p>
        <div className="fourCard">
            <div className="myCard">
                <div className="icon_card">
                    <div className="circle_icon theme_fa_icon_color"> <FontAwesome  name='rocket' /> </div>
                    <h5 className="theme_text_color text_strach text_size_fa_card">Online Reviews </h5>
                    <p className="fa_card_text">Over 1000 genuine user reviews on Tripadvisor, Booking.com, Google &amp; Airbnb</p>
                </div>
            </div>
            <div className="myCard">
                <div className="icon_card">
                    <div className="circle_icon theme_fa_icon_color"> <FontAwesome  name='map-marker' /> </div>
                    <h5 className="theme_text_color text_strach text_size_fa_card">Online Reviews </h5>
                    <p className="fa_card_text">Over 1000 genuine user reviews on Tripadvisor, Booking.com, Google &amp; Airbnb</p>
                </div>
            </div>
            <div className="myCard">
                <div className="icon_card">
                    <div className="circle_icon theme_fa_icon_color"> <FontAwesome  name='cutlery' /> </div>
                    <h5 className="theme_text_color text_strach text_size_fa_card">Online Reviews </h5>
                    <p className="fa_card_text">Over 1000 genuine user reviews on Tripadvisor, Booking.com, Google &amp; Airbnb</p>
                </div>
            </div>
            <div className="myCard">
                <div className="icon_card">
                    <div className="circle_icon theme_fa_icon_color"> <FontAwesome  name='building-o' /> </div>
                    <h5 className="theme_text_color text_strach text_size_fa_card">Online Reviews </h5>
                    <p className="fa_card_text">Over 1000 genuine user reviews on Tripadvisor, Booking.com, Google &amp; Airbnb</p>
                </div>
            </div>
        </div>
    </div>
);

export default CardExampleExpandable;