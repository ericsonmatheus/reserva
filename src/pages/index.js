import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Main() {
    return (
        <div className="main">
            <div className="main--left">
                <div className="main--home">
                    <div className="main-userInfo"></div>
                    <div className="main-options"></div>
                </div>
                <div className="main--hours">
                    <div className="main--title">Horário de Funcionamento</div>
                    <div className="main--hoursOpening"></div>
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
                    <div className="main--title">Máquina de Lavar e Secadora</div>
                    <div className="main--descriptionInfo"></div>
                </div>
                <div className="main--contact">
                    <div className="main--title">Contato do Síndico</div>
                    <div className="main--contacts"></div>
                </div>
            </div>
        </div>
    );
}

export default Main;