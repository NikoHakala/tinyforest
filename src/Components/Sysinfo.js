import React from 'react';

const Sysinfo = () => {

    // TODO Pull system info etc.

    //const [sysinfo, setSysinfo] = useState([]);
    
    // const jsonFetch = () => {
    //    fetch('../sysinfo.json')
    //    .then((res) => res.json())
    //    .then(data => setSysinfo(data))
    //    .catch(err => console.error(err))
    //}

    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>System Information</h2>
            <div className="sys1">
                <h5>System Information</h5>
                <h6>Temperature: Pull system temp</h6>
                <h6>Kernel: Pull kernel info</h6>
            </div>
            </div>
        </div>
    );
};

export default Sysinfo;