import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import '../App.css';

const ModalList = () => {

    const [open, setOpen] = React.useState(false);

    const imageList = [
        { url: "../Photos/kolvaus1.jpeg", desc: "Kolvaus kuva" },
        { url: "../Photos/rpiMoist.jpeg", desc: "rpi Vesianturi" },
        { url: "../Photos/rpiPek.jpeg", desc: "Pekan testit" },
        { url: "../Photos/rpiTemp.jpeg", desc: "rpi Lämpöanturi" },
        { url: "../Photos/konstaRpi.jpeg", desc: "Konstan testit" },
        { url: "../Photos/kokous1.jpeg", desc: "Kokous kuva" }
    ]
    const handleOpen = (e) => {
        e.preventDefault();
        imageList.filter((item, index) => parseInt(e.target.id ) !== index)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="modal-wrapper">
                {imageList.map((item, index) =>
                <div key={index}>
                    <button type="button" onClick={handleOpen}>
                        <img id="imageIndex" alt="Broken" src={item.url} width="250"></img>
                    </button>
                    
                    <Modal 
                        open={open}
                        onClose={handleClose}
                    >
                        <div className="Modaldiv">
                            <img alt="Broken" src={item.url} width="800"></img>
                            <Typography variant="body1">{item.desc}</Typography>
                            {console.log(index)}
                        </div>

                    </Modal>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default ModalList;