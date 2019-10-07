import React from 'react';

const Sysinfo = () => {
    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>System Information</h2>
            <h6>System stats such as Kernel Uptime etc.</h6>
            <div className="sys1">
                <h6>Systeminfo</h6>
                <text>Temperature: 47C</text><br></br>
                <text>Kernel: abcd123</text>
            </div>
            </div>
        </div>
    );
};

export default Sysinfo;