import React, { useState, useEffect } from 'react';

const LogParser = () => {

    const [sensor, setSensor] = useState([]);
    const [systemfile, setSystemfile] = useState([]);
    const [jsoncheck, setJsoncheck] = useState([]);

    useEffect(() => {
        fetchSensor();
        fetchSystemfile();
        fetchJsoncheck();
    }, [])


    const fetchSensor = () => {
        fetch('../tinyforest.log.json')
        .then((res) => res.json())
        .then(data => setSensor(data.sensor.msg))
        .catch(err => console.error(err))
    }
    const fetchSystemfile = () => {
        fetch('../tinyforest.log.json')
        .then((res) => res.json())
        .then(data => setSystemfile(data.system_file.msg))
        .catch(err => console.error(err))
    }
    const fetchJsoncheck = () => {
        fetch('../tinyforest.log.json')
        .then((res) => res.json())
        .then(data => setJsoncheck(data.json_check.msg))
        .catch(err => console.error(err))
    }

    console.log(sensor)
    console.log(jsoncheck)
    console.log(systemfile)

    return (
        <div>
            <p>{sensor.name}: {sensor.description}</p>
            <p>{jsoncheck.description}</p>
        </div>
    );
};

export default LogParser;