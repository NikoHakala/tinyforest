import React from 'react';
import Modalbox1 from './Modalbox1';
import Modalbox2 from './Modalbox2';
import Modalbox3 from './Modalbox3';
import Modalbox4 from './Modalbox4';
import Modalbox5 from './Modalbox5';
import Modalbox6 from './Modalbox6';


const ModalGrid = () => {
    return (
        <div className="modal-wrapper">
            <Modalbox1/>
            <Modalbox2/>
            <Modalbox3/>
            <Modalbox4/>
            <Modalbox5/>
            <Modalbox6/>
        </div>
    );
};


export default ModalGrid;