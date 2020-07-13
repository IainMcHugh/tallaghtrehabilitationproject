import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Outreach extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div className="back-to-about">
                    <NavLink to='/dayprogramme'><button><i className="material-icons">arrow_back</i></button></NavLink>
                </div>
                <div className="aftercare-box">
                    <h2>Outreach</h2>
                    <h4>
                    Alongside offering an outreach service to our programme participants,Tallaght Rehabilitation Project also offers an outreach service to a wide range of organisations, such as prisons or stabilization programmes who may have clients interested in taking the next step in rehabilitation.

                    A project worker from Tallaght Rehabilitation Project will travel to your project and present a power-point presentation about our organisation.
                    <br /><br />
                    If you are a probation officer or work within the prison service and know of someone from the Tallaght wide area who wishes to avail of our services please contact us and we will arrange a meeting or send you an information pack.
                    <br /><br />
                    The aim of the referral service is to respond as swiftly as possible to a request for intervention and engagement with the programme. The focus of assessment is on establishing full and comprehensive knowledge of the background, needs and circumstances of the individual, and also to allow applicants an opportunity to access further information about Tallaght Rehabilitation Project.
                    <br /><br />
                    Tallaght Rehabilitation Project also provide an outreach service to participants who for whatever reason can not attend the programme in Kiltalown House.
                    <br /><br />
                    </h4>
                </div>
            </div>
        )
    }
}

export default Outreach
