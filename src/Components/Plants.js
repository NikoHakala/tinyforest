import React from 'react';

const Plants = () => {
    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>Plant Information</h2>
            <h6>Info about plants such as temperature moisturelevel etc.</h6>
            <div className="plants">
                <div className="plant">
                <h6>Plant1</h6>
                <text>Temperature: 20C</text><br></br>
                <text>Moisture: 40%</text>
                </div>
                <div className="plant">
                <h6>Plant2</h6>
                <text>Temperature: 20C</text><br></br>
                <text>Moisture: 40%</text>
                </div>
                <div className="plant">
                <h6>Plant3</h6>
                <text>Temperature: 20C</text><br></br>
                <text>Moisture: 40%</text>
                </div>
                <div className="plant">
                <h6>Plant4</h6>
                <text>Temperature: 20C</text><br></br>
                <text>Moisture: 40%</text>
                </div>
            </div>
            </div>
        </div>
    );
};


export default Plants;