/**
 * Created by AVINASH on 5/20/2017.
 */


import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import images from './images/1.JPG'

const ThreeImageSec = () => (
    <div className="section2">
        <h2>Multiple Options - Both Apartments & Single Rooms</h2>
        <p>Family Service Apartments, Studios & Corporate Guest Houses in Gurgaon</p>
        <div className="fourCard">
            <div className="myCard2">
                <div className="icon_card">
                    <Card>
                        <img src={images} width={'100%'} />
                        <CardTitle    subtitle="ery time. Each of our accommodation in Gurgaon,
                        Delhi NCR and Goa has won awards; Most Promising Servic" />
                    </Card>
                </div>
            </div>
            <div className="myCard2">
                <div className="icon_card">
                    <Card>
                        <img src={images} width={'100%'} />
                        <CardTitle    subtitle="ery time. Each of our accommodation in Gurgaon,
                        Delhi NCR and Goa has won awards; Most Promising Servic" />
                    </Card>
                </div>
            </div>
            <div className="myCard2">
                <div className="icon_card">
                    <Card>
                        <img src={images} width={'100%'} />
                        <CardTitle    subtitle="ery time. Each of our accommodation in Gurgaon,
                        Delhi NCR and Goa has won awards; Most Promising Servic" />
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

export default ThreeImageSec;
