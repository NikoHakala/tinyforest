import React from 'react';
//import ModalList from './ModalList';
//import ModalGrid from './ModalGrid';
//import ImageGallery from './ImageGallery';
import MultipleGridImages from 'react-multiple-image-grid'


// TODO fix modallist to display right item

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="gridimages" style={{width: '50%'}}>
                <MultipleGridImages images={[
                "../Photos/kokous1.jpeg",
                "../Photos/kolvaus1.jpeg",
                "../Photos/kolvaus2.jpg",
                "../Photos/kolvaus3.jpg",
                "../Photos/kolvaus4.jpg",
                "../Photos/konstaRpi.jpeg",
                "../Photos/rpiMoist.jpeg",
                "../Photos/rpiPek.jpeg",
                "../Photos/rpiTemp.jpeg",
                "../Photos/valkosipulivk1.jpeg",
                "../Photos/valkosipulivk2.jpg",
                "../Photos/valkosipulivk3.jpg"]}/>
            </div>
            <div className="hometext">
                <h3>About</h3>
                <p>
                    Tekstiä
                </p>
            </div>
        </div>

    );
};


export default Home;