import React, { Component } from 'react';

export class RoomRental extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            active_page: 0,
            page_left: false,
            page_right: true,
        }
    }

    renderSwitch(param){
        switch(param){
            case 0:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-1.jpg")} />
            )
            case 1:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-2.jpg")} />
            )
            case 2:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-3.jpg")} />
            )
            case 3:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-4.jpg")} />
            )
            case 4:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-5.jpg")} />
            )
            case 5:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-6.jpg")} />
            )
            case 6:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-7.jpg")} />
            )
            case 7:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-8.jpg")} />
            )
            case 8:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-9.jpg")} />
            )
            case 9:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-10.jpg")} />
            )
            case 10:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-11.jpg")} />
            )
            case 11:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-12.jpg")} />
            )
            case 12:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-13.jpg")} />
            )
            case 13:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-14.jpg")} />
            )
            case 14:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-15.jpg")} />
            )
            case 15:
            return(
                <img className='booklet-page booklet-active' src={require("../../images/room_rental_booklet/room_rental_booklet-16.jpg")} />
            )
        }
    }
    
    changePage = (e) => {
        let prevActivePage = this.state.active_page;
        console.log(e.target.innerText);
        if(e.target.innerText === "keyboard_arrow_right"){
            prevActivePage++;
        } else {
            prevActivePage--;
        }
        
        if (prevActivePage == 0){
            this.setState({
                page_left: false,
                page_right: true,
            });
        }
        else if(prevActivePage > 0 && prevActivePage < 15){
            this.setState({
                page_right: true,
                page_left: true
            });
        }
        else{
            this.setState({
                page_right: false,
                page_left: true
            });
        }
        this.setState({
            active_page: prevActivePage
        })
    }

    render() {
        const {active_page, page_left, page_right} = this.state;
        return (
            <div>
                <div className="background-image-container"></div>
                <div class="aftercare-container">
                    <div class="aftercare-box">
                        <h2>Summary</h2>
                        <h4>
                        Kiltalown House is an 18th Century House beautifully restored by South Dublin Co. Council for Tallaght Rehabilitation Project CLG. It is the ideal setting not only for rehabilitation but for training, counselling and holistic treatments. We hope you enjoy your time here.
                        <br/><br/>
                        Counselling Rooms are available for individual sessions and conferences/training rooms are available from Monday to Saturday - please ring and check availability. We have late night opening until 10:00pm Tuesday to Saturday.
                        <br/><br/>
                        Tallaght Rehabilitation Project has on site parking and employs security for the safety of patrons of Tallaght Rehabilitation Project, Kiltalown House. Tallaght Rehabilitation Project complies with up to date Health & Safety and is monitored by CCTV 24 hours per day. In order to rent rooms you must give Tallaght Rehabilitation Project CLG a copy of your qualifications and your insurance and we will be happy to do up a room rental contract for you.
                        <br/><br/>
                        </h4>
                    </div>
                    
                    <div class="aftercare-box">
                        <h2>Rooms</h2>
                        <div class="aftercare-who-list">
                            <div className='booklet-container'>
                            {
                            page_left ?
                            <i class="material-icons" onClick={this.changePage}>
                            keyboard_arrow_left
                            </i>:
                            <div></div>
                            }
                            
                            {this.renderSwitch(active_page)}
                            {
                            page_right ?
                            <i class="material-icons" onClick={this.changePage}>
                            keyboard_arrow_right
                            </i>:
                            <div></div>
                            }
                            </div>
                        </div>
                    </div>
                    <div class="aftercare-box">
                        <h2>Contact information</h2>
                        <h4>
                        If you are interested in booking a room please contact Joan on 014597705 or email: joann@tallaghtrehabproject.ie
                        <br/><br/>
                        <br/><br/>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomRental
