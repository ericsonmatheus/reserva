import React from "react";
import "./reserveLeft.css";

function ReserveLeft(active) {
    return (
        <div className="reserve--left">
            <div className="reserve--step">
                <li>
                    <ul className={active.active === 'reserve' || active.active === 'hour' || active.active === 'finish' ? 'current': ''}>Reserva</ul>
                    <ul className={active.active === 'hour' || active.active === 'finish' ? 'current': ''}>Horário</ul>
                    <ul className={active.active === 'finish' ? 'current': ''}>Finalizar</ul>
                </li>
            </div>
        </div>
    );
}

export default ReserveLeft;


