import React from 'react';

const Sysinfo = () => {

    // TODO Pull system info etc.

    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>System Information</h2>
            <div className="sys1">
                <h5>Systeminfo</h5>
                <h6>Temperature: Pull system temp</h6>
                <h6>Kernel: Pull kernel info</h6>
            </div>
            </div>
        </div>
    );
};

export default Sysinfo;