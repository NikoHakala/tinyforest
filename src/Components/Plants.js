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
        .then(data => setPlant(data.plant))
        .catch(err => console.error(err))
    }

    //console.log(plant.imagefile)

    return (
        <div>
            <div className="wrapper">
            <h2 style={{padding:10}}>Plant Information</h2>
            <div className="plants">
                <div className="plant1">
                    <h5>ID: {plant.id}</h5>
                    <h5>Nimi: {plant.nimi}</h5>
                    <h5>Tyyppi: {plant.type}</h5>
                    <h5>Istutuspäivä: {plant.planting_day}</h5>
                <img alt="No_image" title={plant.short_description} src={plant.imagefile} width="200" ></img>
                </div>
                <div className="plant2">
                    <h5>ID: PL2ID</h5>
                    <h5>Nimi: Kasvi2</h5>
                    <h5>Tyyppi: Kasvi2Tyyppi</h5>
                    <h5>Istutuspäivä: kasvi2ispv</h5>
                <img alt="No_image" src={plant.imagefile2} width="200" ></img>
                </div>
            </div>
            </div>
        </div>
    );
};


export default Plants;