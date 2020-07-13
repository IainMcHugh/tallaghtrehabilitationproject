import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DPReferralForm from '../../referral_forms/day_programme_referral_2018.pdf';
import DPCriteria from '../../referral_forms/criteria_for_assessment_2019.pdf';

export class DayProgramme extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div class="aftercare-container">
                    <div class="aftercare-box">
                        <h2>Summary</h2>
                        <h3>"About heading"</h3>
                        <h4>TRP is a dedicated specialist rehabilitation project in the Tallaght area providing a community based day-programme for people in recovery with addiction problems. The programme is specifically designed to provide a safe and confidential environment where participants can actively engage in a therapeutic process of recovery. The overall objective of the programme is to assist and support the rehabilitation and recovery process and realistic progression of people who have become stable in treatment on prescribed methadone or who have achieved drug free status. Our mission statement comes from a community development ethos, which believes in the benefits of rehabilitation within a community setting and where participants can be supported in their recovery, by their own community. TRP contributes to local development through providing this necessary service for people with addiction problems.
                        <br/><br/>
                        TRP is represented on a range of community and voluntary organisations/ bodies within the area and is also actively involved in promoting and adhering to the National Drugs Strategy 2009 – 2016 under the umbrella of rehabilitation.　　
                        <br/><br/>
                        We are committed to ongoing staff training, skills development, education and personal development; we also provide training and supervision for students and volunteers. We liaise and network with local agencies/organisations who work with our target groups and we have a genuine commitment to the contribution of positively influencing rehabilitation services in the Tallaght area.　 　
                        <br/><br/>
                        </h4>
                    </div>
                    
                    <div class="aftercare-box">
                        <h2>Who is it for</h2>
                        <h4>At present the TRP programme provides 17 specialist rehabilitation places. There are various therapeutic interventions and models　of therapy provided and　delivered by the staff team. These include:
                            <br/><br/>
                        <ul>
                            <li>Reality therapy / Choice Therapy</li>                              
                            <li>Cognitive Behavioural Therapy</li>
                            <li>Rational Emotive Therapy</li>
                            <li>Motivational Interviewing</li>
                            <li>Therapeutic Group Process</li>
                            <li>Relapse Prevention Module / Workshops</li>
                            <li>Career guidance</li>
                            <li>Individual Learner Plan</li>
                        </ul>
                        
                        <br/><br/>
                        As a specialist rehabilitation programme, the primary focus and engagement for participants is on the therapeutic process of recovery. The programme offers a period of structured development work, which is essential to empower and enable participants to address addiction, self-esteem, and self-confidence and facilitate personal growth and development. The eventual goal for participants is successful reintegration into family and community and preparation for further education or employment.
                        <br/><br/>
                        TRP operates a referral system in relation to participant placement involving a range of agencies this includes both statutory community and voluntary organisation working together for the needs of our target group. The programme provides opportunities for clients  to develop a range of skills, which will assist them in their ongoing recovery process from self destructive addictive behaviour.<br/><br/></h4>
                    </div>
                    <div class="aftercare-box">
                        <h2>Services Available</h2>
                        <div className="dayprogramme-services-container"> 
                            <NavLink to='/dayprogramme/therapeutic_intervention'>
                                <div>Therapeutic Intervention</div>
                            </NavLink>
                            <NavLink to='/dayprogramme/therapeutic_intervention'>
                            <div>Educational Intervention</div>
                            </NavLink>
                            <NavLink to='/dayprogramme/therapeutic_intervention'>
                            <div>Programme Path</div>
                            </NavLink>
                            <NavLink to='/dayprogramme/therapeutic_intervention'>
                            <div>Outreach</div>
                            </NavLink>
                            <NavLink to='/dayprogramme/therapeutic_intervention'>
                            <div>Information Pack</div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="aftercare-box">
                        <h2>What to do next</h2>
                        <a href={DPCriteria} target="_blank"><button class="referral-button">Criteria for Assessment</button></a>
                        <a href={DPReferralForm} download><button class="referral-button">Download Referral Form</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayProgramme
