import React from "react";
import "./reserve.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import WashDryer from '../images/lavar-secar.jpg';
import Wash from '../images/maquina-lavar.jpg';
import Dryer from '../images/secadora.png';

import { Link } from "react-router-dom";

function Reserve() {
    return (
        <div className="reserve">
            <div className="reserve--left">
                <div className="reserve--step">
                    <li>
                        <ul className="current">Reserva</ul>
                        <ul>Horário</ul>
                        <ul>Finalizar</ul>
                    </li>
                </div>
            </div>
            <div className="reserve--right">
                <div className="reserve--return">
                    < Link to="/">< NavigateBeforeIcon style={{fontSize: 35}}/></Link>
                </div>
                <div className="reserve--row">    
                    <div className="reserve--optionWash">
                        <div className="reserve--card">
                            <div className="reserve--img">
                                <img src=""  alt="Máquina de Lavar"></img>
                            </div>
                            <h2>Máquina de Lavar</h2>
                            <div className="reserve--description">
                                <p>Máquina de lavar roupa de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: 45 minutos</p>
                            </div>
                            < Link to="/reserve">Reservar</Link>
                        </div>
                    </div>
                    <div className="reserve--optionDryer">
                        <div className="reserve--card">
                            <div className="reserve--img">
                                <img src="" alt="Secadora"></img>
                            </div>
                            <h2>Secadora</h2>
                            <div className="reserve--description">
                                <p>Secadora de roupas de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: 45 minutos</p>
                            </div>
                            < Link to="/reserve">Reservar</Link>
                        </div>
                    </div>
                </div>
                <div className="reserve--column">
                    <div className="reserve--optionWashDryer">
                        <div className="reserve--card">
                            <div className="reserve--img">
                                <img src=""  alt="Máquina de Lavar e secar"></img>
                            </div>
                            <h2>Máquina de Lavar e Secadora</h2>
                            <div className="reserve--description">
                                <p>Máquina de lavar e secadora de roupas de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: 45 minutos</p>
                            </div>
                            < Link to="/reserve">Reservar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserve;