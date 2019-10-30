import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../App.css';

const Modalbox9 = props => {

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
                <img alt="Broken" src='../Photos/kolvaus2.jpg' width="250"></img>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="Modaldiv">
                    <img alt="Broken" src='../Photos/kolvaus2.jpg' height="500"></img>
                    <p style={{background:'black', color:'gray', width:344}}>Lisää kolvailua</p>
                </div>
            </Modal>
        </div>
    );
};


export default Modalbox9;