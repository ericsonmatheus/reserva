import React from "react";
import "./mainLeft.css";
import { Link } from "react-router-dom";

function MainLeft(main) {

    console.log()
    return (
        <div className="main--left">
            <div className="main--home">
                <div className="main--userInfo">
                    <div className="main--name">Marcos Antonio</div>
                    <div className="main--bloco">Bloco B</div>
                </div>
                <div className="main--options">
                    <Link to="/" className={`main-optionLink ${main.active === "main"? "active" : ""}`}>Inicio</Link>
                    <Link to="/myreserves" className={`main-optionLink ${main.active === "myreserve"? "active" : ""}`}>Minhas Reservas</Link>
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
    );
}

export default MainLeft;