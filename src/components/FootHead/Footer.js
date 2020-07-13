import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <h5>Tallaght Rehabilitation Project CLG is kindly assisted and supported by the following Irish Government Agencies</h5>
                    <div className="gov-agencies-container">
                        <img src={require("../../images/tallaght_drug_and_alcohol_task_force_logo.jpg")} alt="image" />
                        <img src={require("../../images/SocialProtection_MARK_MASTER_Std_Colour.jpg")} alt="image" />
                        <img src={require("../../images/hse_logo_border_2016_web.jpg")} alt="image" />
                        <img src={require("../../images/south-dublin-county-council.png")} alt="image" />
                    </div>
                    <div className="footer-contact-info">
                        Tallaght Rehabilitation Project CLG <br/> email: info@tallaghtrehabproject.ie <br/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
