import React, { useState, useEffect } from 'react';

const Sysinfo = () => {

    const [moisture, setMoisture] = useState([]);
    const [light, setLight] = useState([]);
    const [temperature, setTemperature] = useState([]);

    useEffect(() => {
        fetchMoisture();
        fetchLight();
        fetchTemperature();
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

    console.log(moisture.sensor_friendly_name)
    console.log(light.sensor_friendly_name)
    console.log(temperature.sensor_friendly_name)

    //console.log(sensors.light)
    //console.log(sensors.temperature)
    //console.log(sensors.acidity)
        

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
                        <h5>Connected to pin: {moisture.gpio_pin}</h5>
                    </div>
                    <div className="sys1">
                        <h5>Sensor name: {light.sensor_friendly_name}</h5>
                        <h5>Connected to pin: {light.gpio_pin}</h5>
                    </div>
                    <div className="sys1">
                        <h5>Sensor name: {temperature.sensor_friendly_name}</h5>
                        <h5>Connected to pin: {temperature.gpio_pin}</h5>
                    </div>
                    
                </div> 
            </div>
        </div>
    );
};

export default Sysinfo;