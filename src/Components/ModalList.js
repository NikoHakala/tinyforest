import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import '../App.css';

const ModalList = () => {

    const [open, setOpen] = React.useState(false);

    const imageList = [
        { id: "0", url: "../Photos/kokous1.jpeg", desc: "Kolvaus kuva" },
        { id: "1", url: "../Photos/rpiMoist.jpeg", desc: "rpi Vesianturi" },
        { id: "2", url: "../Photos/rpiPek.jpeg", desc: "Pekan testit" },
        { id: "3", url: "../Photos/rpiTemp.jpeg", desc: "rpi Lämpöanturi" },
        { id: "4", url: "../Photos/konstaRpi.jpeg", desc: "Konstan testit" },
        { id: "5", url: "../Photos/kolvaus1.jpeg", desc: "Kokous kuva 1" },
        { id: "6", url: "../Photos/kolvaus2.jpg", desc: "Kolvaus kuva 2" },
        { id: "7", url: "../Photos/kolvaus3.jpg", desc: "Kolvaus kuva 3" },
        { id: "8", url: "../Photos/kolvaus4.jpg", desc: "Kolvaus kuva 4" },
        { id: "9", url: "../Photos/valkosipulivk1.jpeg", desc: "Valkosipuli viikko 1" },
        { id: "10", url: "../Photos/valkosipulivk2.jpg", desc: "Valkosipuli viikko 2" }
    ]

    const handleOpen = (e) => {
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
                        <div  className="Modaldiv">
                            <img id={index} alt="Broken" src={item.url} width="400" ></img>
                            <Typography variant="body1">{item.desc}</Typography>
                        </div>
                    </Modal>
                </div>)
                }
            </div>
        </div>
    );
};

export default ModalList;