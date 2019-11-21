import React, { useState, useEffect } from 'react';

const LogParser = () => {

    const [logs, setLogs] = useState([]);
    

    useEffect(() => {
        fetchLogs();
    }, [])


    const fetchLogs = () => {
        fetch('../tinyforest.log.json')
        .then((res) => res.json())
        .then(data => setLogs(data))
        .catch(err => console.error(err))
    }

    console.log(log)

    return (
        <div>
            
        </div>
    );
};

export default LogParser;