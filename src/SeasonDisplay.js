import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat,month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    }else {
        return lat > 0 ? 'winter': 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth);
    const {text, iconName} =  seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
        
    );
};

export default SeasonDisplay;


/*
var x = JSON.parse('{"id":1,"idPuesto":1,"idDepartamento":1,"nombre":"Joel","primerApellido":"Gamez","segundoApellido":"Perez","email":"jggamezp@concredito.com.mx","nombreUsuario":"jggamezp@concredito.com.mx","password":"","status":"ACTIVO","firstLog":0, "rolUsuario": "SOLICITANTE"}')
JSON.stringify(x);
localStorage.setItem('usuario',JSON.stringify(x));
localStorage.getItem('usuario');

*/
