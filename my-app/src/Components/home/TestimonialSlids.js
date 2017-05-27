/**
 * Created by AVINASH on 5/20/2017.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import images from './images/1.JPG'

const TestimonialsSlids = () => (
    <div className="sliderOnIndex">
        <h3 className="mrgnTop30">Our Team</h3>
        <section className="OurTeam txtCenter" id="slides">
            <div className="gcard ourTemInner">
                <img src={images} width={'100%'} height={'300px'} />
                <h3>abinash kumar</h3>
                <p className="designation">Developer</p>
            </div>
            <div className="gcard ourTemInner">
                <center><img src={images} width={'100%'} height={'300px'} /></center>
                <h3>abinash kumar</h3>
                <p className="designation">Developer</p>
            </div>
            <div className="gcard ourTemInner">
                <img src={images} width={'100%'} height={'300px'} />
                <h3>abinash kumar</h3>
                <p className="designation">Developer</p>
            </div>
        </section>
    </div>
);

export default TestimonialsSlids;