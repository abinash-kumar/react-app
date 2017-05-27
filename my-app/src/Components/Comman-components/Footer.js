/**
 * Created by AVINASH on 5/23/2017.
 */

import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="react-footer">
                    <div>
                        <h3>QuicK Links</h3>
                        <ul>
                            {this.props.navlinks.links.map((links) => <li>{links}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Valuable Clints</h3>
                        <ul>
                            {this.props.navlinks.ClintsLinks.map((ClintsLinks) => <li>{ClintsLinks}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Details</h3>
                        <ul>
                            {this.props.navlinks.ContactDetails.map((ContactDetails) => <li>{ContactDetails}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <ul>
                            {this.props.navlinks.followUs.map((followUs) => <li>{followUs}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="footerCopyRtText">© Copyright 2014-2016 | All Rights Reserved |Our Blog | Powered by
                    Nodal Platform
                </div>
            </div>
        );
    }
}

export default Footer;
