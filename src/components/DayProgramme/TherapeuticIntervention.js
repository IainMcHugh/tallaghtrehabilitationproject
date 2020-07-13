import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class TherapeuticIntervention extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div className="back-to-about">
                    <NavLink to='/dayprogramme'><button><i className="material-icons">arrow_back</i></button></NavLink>
                </div>
                <div className="aftercare-box">
                    <h2>Therapeutic Intervention</h2>
                    <h4>The Therapeutic component of the programme, forms the core around which all other sessions are interwoven.  All the work in TRP is carried out in a safe, healthy, confidential, caring and nurturing environment.  The programme aims to provide a broad based humanistic approach to the issue of drug and alcohol use, in a therapeutic/psycho social model which has a non-medical approach.
                    <br/><br/>
                    By ‘therapeutic’ we mean to heal, to assist and to help restore a person’s well being.  There is a vast and varied approach to the programme at TRP and in fact all sessions have a development and therapeutic aspect to them.  We endeavour to support participants to evaluate and become aware of self-destructive thinking and behaviours which may underpin serious addiction problems.
                    <br/><br/>
                    Participants are also asked to commit to a residential weekend within the duration of their programme.  The residential setting is used to explore issues of loss and bereavement, relationships, life stories, etc..
​                    </h4>
                </div>
                <div className="aftercare-box">
                    <h2>Addiction Awareness</h2>
                    <h4>This module addresses people who are in the early stages of recovery.  The approach is very practical and heightens the participant’s knowledge and awareness of their addiction.</h4>
                </div>
                <div className="aftercare-box">
                    <h2>Addiction Awareness</h2>
                    <h4>Relapse Prevention workshop inculde

                    As people progress through the therapeutic process at TRP, there is a more in depth focus on certain issues that may arise as the person progresses through the Day Programme. Our trained qualified staff facitate various different modules and workshops these include;
                    <ul>
                        <li>Tips for Slips’</li>
                        <li>Healthy Relationships</li>
                        <li>Managing stress </li>
                        <li>Managing dangerous and stressful situations</li>
                    </ul>
                    </h4>
                </div>
                <div className="aftercare-box">
                    <h2>Group Therapy Process</h2>
                    <h4>There are 3 process groups facilitated on a weekly basis. Participants are encouraged to share their experiences and support each other in a peer led process in a caring and supportive enviroment.</h4>
                </div>
            </div>
        )
    }
}

export default TherapeuticIntervention
