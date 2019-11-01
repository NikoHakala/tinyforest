import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../App.css';

const Modalbox2 = () => {

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
                <img alt="Broken" src='../Photos/kokous1.jpeg' width='80%'></img>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="Modaldiv">
                    <img alt="Broken" src='../Photos/kokous1.jpeg' width="600"></img>
                    <p style={{background:'black', color:'gray', width:600}}>Ensimmäinen kokous</p>
                </div>
            </Modal>
        </div>
    );
};

export default Modalbox2;