import React from 'react';

const Fetchjson = () => {

    const fetchPlant = () =>{
        fetch('../plantinfo.json')
        .then(r => r.json())
        .then(rData => console.log(rData))
        
    }


    return (
        <div>
            <button fetchPlant={fetchPlant}>
                Fetch
            </button>

        </div>
    );
};


export default Fetchjson;