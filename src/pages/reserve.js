import React from "react";
import "./reserve.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import WashDryer from '../images/lavar-secar.jpg';
import Wash from '../images/maquina-lavar.jpg';
import Dryer from '../images/secadora.png';

import { Link } from "react-router-dom";
import ReserveLeft from "./components/reserveLeft";

function Reserve() {
    return (
        <div className="reserve">

            < ReserveLeft active="reserve"/>
            
            <div className="reserve--right">
                <div className="reserve--return">
                    < Link to="/">< NavigateBeforeIcon style={{fontSize: 35}}/></Link>
                </div>
                <div className="reserve--row">    
                    <div className="reserve--optionWash">
                        <div className="reserve--img">
                            <img src={Wash}  alt="Máquina de Lavar"></img>
                        </div>
                        <div className="reserve--content">
                            <h2>Máquina de Lavar</h2>
                            <div className="reserve--description">
                                <p>Máquina de lavar roupa de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: <strong>45 minutos</strong></p>
                            </div>
                            < Link to="/reserve/hour">Reservar</Link>
                        </div>
                    </div>
                    <div className="reserve--optionDryer">
                        <div className="reserve--img">
                            <img src={Dryer} alt="Secadora"></img>
                        </div>
                        <div className="reserve--content">
                            <h2>Secadora</h2>
                            <div className="reserve--description">
                                <p>Secadora de roupas de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: <strong>45 minutos</strong></p>
                            </div>
                            < Link to="/reserve/hour">Reservar</Link>
                        </div>
                    </div>
                </div>
                <div className="reserve--column">
                    <div className="reserve--optionWashDryer">
                        <div className="reserve--img">
                            <img src={WashDryer}  alt="Máquina de Lavar e secar"></img>
                        </div>
                        <div className="reserve--content">
                            <h2>Máquina de Lavar e Secadora</h2>
                            <div className="reserve--description">
                                <p>Máquina de lavar e secadora de roupas de uso de comum, mantidas pelo prédio.<br/><br/><br/>Tempo: <strong>45 minutos</strong></p>
                            </div>
                            < Link to="/reserve/hour">Reservar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserve;