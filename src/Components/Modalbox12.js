import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../App.css';

const Modalbox12 = props => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                <img alt="Broken" src='../Photos/valkosipulivk3.jpg' width='80%'></img>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="Modaldiv">
                    <img alt="Broken" src='../Photos/valkosipulivk3.jpg' height="500"></img>
                    <p style={{background:'black', color:'gray', width:376}}>Valkosipulin kasvu viikko 3</p>
                </div>
            </Modal>
        </div>
    );
};


export default Modalbox12;