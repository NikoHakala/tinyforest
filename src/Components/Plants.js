import React, {useState, useEffect} from 'react';


const Plants = () => {

    // TODO Figure out layout and what information to pull form json
    // Maby add pictures etc.
    // plantinfo.json is a temporary file

    const [plant, setPlant] = useState([]);

    useEffect(() => {
        jsonFetch();
    }, [])

    const jsonFetch = () => {
        fetch('../plantinfo.json')
        .then((res) => res.json())
        .then(data => setPlant(data))
        .catch(err => console.error(err))
    }

    //console.log(plant.imagefile)

    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>Plant Information</h2>
            <div className="plants">
    
                <div className="plant1">
                    <h6>Nimi: {plant.id}</h6>
                    <h6>Tyyppi: {plant.type}</h6>
                    <h6>Istutuspäivä: {plant.istutuspv}</h6>
                <img alt="Broken" src={plant.imagefile} width="200" ></img>
                </div>

                <div className="plant2">
                    <h6>Nimi: Kasvi2</h6>
                    <h6>Tyyppi: Kasvi2Tyyppi</h6>
                    <h6>Istutuspäivä: Istutuspv2</h6>
                <img alt="Broken" src={plant.imagefile2} width="200" ></img>
                </div>
            </div>
            </div>
        </div>
    );
};


export default Plants;