import React, {Component} from 'react';
import { Card } from '@material-ui/core';

const DataCard = (props) => {
    return (
        <Card>
            <h1>Confirmed Cases</h1>
            <p>{props.confirmed.value}</p>
            <h1>Deaths</h1>
            <p>{props.deaths.value}</p>
            <h1>Recovered</h1>
            <p>{props.recovered.value}</p>
        </Card>
    )
}

export default DataCard;