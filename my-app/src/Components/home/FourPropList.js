/**
 * Created by AVINASH on 5/20/2017.
 */
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import images from './images/1.JPG'

class CardFourProperty extends Component {
    render() {
        return (
            <div className="section2">
                <h2>Multiple Options - Both Apartments & Single Rooms</h2>
                <p>Family Service Apartments, Studios & Corporate Guest Houses in Gurgaon</p>
                <div className="fourCard">
                    {this.props.Cardtitels.map((Cardtitel) =>
                        <div className="myCard">
                            <div className="icon_card">
                                <Card>
                                    <img src={images} width={'100%'}/>
                                    <CardTitle subtitle={Cardtitel}/>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

    export default CardFourProperty;