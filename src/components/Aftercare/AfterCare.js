import React, { Component } from 'react';
import ACReferralForm from '../../referral_forms/aftercare_referral_2018.pdf';
import ACCriteria from '../../referral_forms/aftercare-referral-form.pdf';

export class AfterCare extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div class="aftercare-container">
                    <div class="aftercare-box">
                        <h2>Aftercare</h2>
                        <h3>"Aftercare should not be an afterthought"</h3>
                        <h4>Tallaght Wide Aftercare Service is a post rehabilitation service that seeks to positively reinforce the gains that people make during early recovery and in turn seeks to support people who wish to continue on the journey of recovery from addiction. <br/> <br/>
                        The Aftercare is a relaxed person centred service that seeks to support and consolidates individuals post rehabilitation.
                        <br/>
                        The service maintains a continuum of care and is designed to meet the needs of those who access it to enable them to reintegrate back into the community in a way that maximizes individual supports and resources. We believe as a team that this is a supportive and nurturing setting for people who have engaged in rehab. Tallaght-wide aftercare service provides a friendly social setting for the participants where they can relax, and talk amongst their peers in a safe and positive environment. The aftercare holds various educational and informative workshops, which are important for maintaining an individual’s recovery. On top of this, the aftercare hosts organised events throughout the year, these social events are enjoyed by all in a safe and supportive environment. In 2016, there were a number of memorable events hosted in the after care service such as BBQ’s, family days, a Halloween party, a Christmas curry night and the award ceremony for the participants of both the day programme and the aftercare service at TRP. There were a number of evaluation evenings throughout the year, which enabled the participants of the after care service to have their say in what events, facilities and activities that they would like to see in the after care service in 2017.
                        <br/><br/>
                        </h4>
                    </div>
                    
                    <div class="aftercare-box">
                        <h2>Who is it for?</h2>
                        <div class="aftercare-who-list">
                            Our Aftercare programme is ideal for people who fit the following requirements: <br/> <br/>
                            <ul>
                                <li>Experience of a rehabilitation process or completion of a rehabilitation programme is desired but not essential.</li>
                                <li>Tallaght Wide Aftercare Service is a next step rehabilitation programme for people who are over 18 years of age.</li>
                                <li>Tallaght Wide Aftercare Service offers a range of supports to individuals on their continued recovery from drug/alcohol addiction.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="aftercare-box">
                        <h2>Activities</h2>
                        <div class="days-container">
                            <div class="day-1">
                                <div class="tuesdays">TUESDAYS</div>
                                <div class="day-text">
                                    <h4>Social Setting & Peer Support Group</h4>
                                    <h5>Lovely Comfortable setting with Peer Support, Fun & Activities!</h5>
                                </div>
                                
                            </div>
                            <div class="day-2">
                                <div class="wednesdays">WEDNESDAYS</div>
                                <div class="day-text">
                                    <h4>Wellness Cafe & NA Meeting</h4>
                                    <h5>So popular! A night of fun, music, meeting, entertainment, & activities!</h5>
                                </div>
                            </div>
                            <div class="day-3">
                                <div class="thursdays">THURSDAYS</div>
                                <div class="day-text">
                                    <h4>Brother In Arms Men's Group</h4>
                                    <h5>Football Screening, Recovery Speakers, Activities & most of all MEN ONLY!!</h5>
                                </div>
                            </div>
                            <div class="day-4">
                                <div class="fridays">FRIDAYS</div>
                                <div class="day-text">
                                    <h4>Soul Sisters & Woman's Only NA Meeting</h4>
                                    <h5>Pamper Nights, Meeting, Facilitators, laughs & most of all WOMEN ONLY!!</h5>
                                </div>
                            </div>
                            <div class="day-5">
                                <div class="saturdays">SATURDAYS</div>
                                <div class="day-text">
                                    <h4>Dance, Quiz/ Movie/ Nights & CA Meeting</h4>
                                    <h5>A night of Pure Fun & Entertainment! Not to be missed!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="aftercare-box">
                        <h2>What to do next</h2>
                        <h4><br/><br/>If you think our service can support you, then the next step is to get a referral form filled in by your referring agency, or contact our Aftercare service directly.<br/><br/></h4>
                        <ul class="what-next-list">
                            <li>Make contact with Tallaght Wide Aftercare Service.</li>
                            <li>Make an appointment for assesment.</li>
                            <li>Tour the facility and meet the staff.</li>
                            <li>Continue the journey to achieve enhanced quality of life.</li>
                        </ul>
                        <a href={ACReferralForm} download><button class="referral-button">Download Referral Form</button></a>
                        <a href={ACCriteria} target='_blank'><button class="referral-button">Open Criteria Form</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AfterCare
