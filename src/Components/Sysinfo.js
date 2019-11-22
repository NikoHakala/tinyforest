import React, { useState, useEffect } from 'react';
import LogParser from './LogParser.js';

const Sysinfo = () => {

    const [moisture, setMoisture] = useState([]);
    const [light, setLight] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchMoisture();
        fetchLight();
        fetchTemperature();
        fetchLogs();
    }, [])

    const fetchMoisture = () => {
        fetch('../plantinfo.json')
        .then((res) => res.json())
        .then(data => setMoisture(data.sensors.moisture))
        .catch(err => console.error(err))
    }

    const fetchLight = () => {
        fetch('../plantinfo.json')
        .then((res) => res.json())
        .then(data => setLight(data.sensors.light))
        .catch(err => console.error(err))
    }
 
    const fetchTemperature = () => {
        fetch('../plantinfo.json')
        .then((res) => res.json())
        .then(data => setTemperature(data.sensors.temperature))
        .catch(err => console.error(err))
    }

    const fetchLogs = () => {
        fetch('../tinyforest.log.json')
        .then((res) => res.json())
        .then(data => setLogs(data))
        .catch(err => console.error(err))
    }

    console.log(logs)

    // TODO Pull system info etc.

    //const [sysinfo, setSysinfo] = useState([]);
    
    //const jsonFetch = () => {
    //    fetch('../sysinfo.json')
    //    .then((res) => res.json())
    //    .then(data => setSysinfo(data))
    //    .catch(err => console.error(err))
    //}


    return (
        <div>
            <div className="wrapperSys">
            <h2 style={{padding:10}}>System Information</h2>
                <div className="sensors">   
                    <div className="sys1">
                        <h5>Sensor name: {moisture.sensor_friendly_name}</h5>
                        <h5>Moisture: 202020</h5>
                        <h5>Connected to pin: {moisture.gpio_pin}</h5>
                    </div>
                    <div className="sys1">
                        <h5>Sensor name: {light.sensor_friendly_name}</h5>
                        <h5>Light value(dark or light): light</h5>
                        <h5>Connected to pin: {light.gpio_pin}</h5>
                    </div>
                    <div className="sys1">
                        <h5>Sensor name: {temperature.sensor_friendly_name}</h5>
                        <h5>Temperature: 123c</h5> 
                        <h5>Connected to pin: {temperature.gpio_pin}</h5>
                    </div>
                    <div className="sys1">
                        <h5>Recent system logs</h5>
                        <LogParser />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Sysinfo;