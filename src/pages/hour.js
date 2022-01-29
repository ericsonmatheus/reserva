import React from "react";
import "./hour.css";
import { Link } from "react-router-dom";

import ReserveLeft from "./components/reserveLeft";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Hour() {
    return (
        <div className="hour">
            < ReserveLeft active="hour"/>
            <div className="hour--right">
                <div className="hour--return">
                    < Link to="/">< NavigateBeforeIcon style={{fontSize: 35}}/></Link>
                </div>
                <div className="hour--schedule">
                    <div className="hour--title">
                        <h2>Máquina de Lavar</h2>
                    </div>
                    <div className="hour--calendar">
                        <div className="hour--top">
                            <div className="hour--monthBefore">
                                < NavigateBeforeIcon style={{fontSize: 25}}/>
                            </div>
                            <div className="hour--month"><p>Janeiro</p></div>
                            <div className="hour--monthNext">
                                < NavigateNextIcon style={{fontSize: 25}}/>
                            </div>
                        </div>
                        <div className="hour--calendarDays">

                        </div>
                    </div>
                    <div className="hour--timeAvailable">
                        <div className="hour--title">
                            <h3>Horários Disponíveis</h3>
                        </div>
                        <div className="hour--option">
                            <div className="hour--available">
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p>
                            </div>
                            <div className="hour--available">
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p>
                            </div>
                            <div className="hour--available">
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p>
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p> 
                                <p> 08:00 - 08:45</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hour;