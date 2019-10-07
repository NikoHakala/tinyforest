import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../App.css';

const Modalbox5 = () => {

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
                <img alt="Broken" src='../Photos/rpiPek.jpeg' width="250"></img>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="Modaldiv">
                    <img alt="Broken" src='../Photos/rpiPek.jpeg' width="800"></img>
                </div>
            </Modal>
        </div>
    );
};

export default Modalbox5;