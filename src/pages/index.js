import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/MailOutline';

function Main() {

    return (
        <div className="main">
            <div className="main--left">
                <div className="main--home">
                    <div className="main--userInfo">
                        <div className="main--name">Marcos Antonio</div>
                        <div className="main--bloco">Bloco B</div>
                    </div>
                    <div className="main--options">
                        <Link to="/" className="main-optionLink active">Inicio</Link>
                        <Link to="/myreserves" className="main-optionLink">Minhas Reservas</Link>
                    </div>
                </div>
                <div className="main--hours">
                    <div className="main--title">
                        <h2>Horário de Funcionamento</h2>
                    </div>
                    <div className="main--hoursOpening">
                        <div>
                            <p className="main--text">
                                Seg<br/>
                                Ter<br/>
                                Qua<br/>
                                Qui<br/>
                                Sex<br/>
                                Sab<br/>
                                Dom
                            </p>
                        </div>
                        <div>
                            <p className="main--text">
                                08:00 - 18:00<br/>
                                08:00 - 18:00<br/>
                                08:00 - 18:00<br/>
                                08:00 - 18:00<br/>
                                08:00 - 18:00<br/>
                                08:00 - 18:00<br/>
                                08:00 - 18:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main--right">
                <div className="main--reserve">
                    <h1>Máquinas de Lavar e Secar</h1>
                    <div className="main--buttomReserve">
                        < Link to="/reserve">Reservar</Link>
                    </div>
                </div>
                <div className="main--info">
                    <div className="main--title">
                        <h2>Máquina de Lavar e Secadora</h2>
                    </div>
                    <div className="main--descriptionInfo">
                        <div className="main--description">
                            <p className="main--text">
                                There are many ave suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                            </p>
                        </div>
                        <div className="main--value">
                            <p className="main--text">
                                Máquina de lavar -------------- R$ 5,00<br/>
                                Máquina de Secar ------------- R$ 3,00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="main--contact">
                    <div className="main--title">
                        <h2>Contato do Síndicos</h2>
                    </div>
                    <div className="main--contacts">
                        <div className="main--phone">
                            <Phone />
                            <p className="main--text">61 9 9999-9999</p>
                        </div>
                        <div className="main--email">
                            <Email />
                            <p className="main--text">teste@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;