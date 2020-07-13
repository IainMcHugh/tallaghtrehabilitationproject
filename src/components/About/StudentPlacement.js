import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class StudentPlacement extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div className="back-to-about">
                    <NavLink to='/about'><button><i class="material-icons">arrow_back</i></button></NavLink>
                </div>
                <div className="about-box">
                    <h2>Would you like to Volunteer?</h2>
                    <h4>Third Level Student Placements</h4>
                    <h4>Tallaght Rehabilitation Project are committed to influencing the development of appropriate and quality training for trainee workers in the field of addiction. Each year Tallaght Rehabilitation Project facilitates a number of students on placement from various colleges and training organizations. Each student is screened and is given opportunities to work under supervision with the participant group.

                    Students get the chance to observe, interact and co-facilitate sessions as appropriate to their level of skills and awareness. The staff work closely as a team and students are privy to the experience of being part of a well functioning team for the duration of their placement.</h4>


                    <h4>Volunteers</h4>
                    <h4>Tallaght Rehabilitation Project always welcome people wishing to volunteer their time here at Kiltalown House and Tallaght Rehabilitation Project and can provide appropriate training and support for interested volunteers. If you wish to become a volunteer please forward a short cover letter and a C.V. to Catherine O’Connor directly here.</h4>

                </div>
            </div>
        )
    }
}

export default StudentPlacement
