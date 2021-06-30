import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, It is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, long, month) => {
    if(month > 2 && month < 9){
        return lat && long > 0 ? 'summer' : 'winter';
    } else {
        return lat && long > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, props.long, new Date().getMonth());
    console.log(season);
    const {text, iconName} = seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;