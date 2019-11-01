import React from 'react';
//import ModalList from './ModalList';
//import ModalGrid from './ModalGrid';
//import ImageGallery from './ImageGallery';
import MultipleGridImages from 'react-multiple-image-grid'


// TODO fix modallist to display right item

const Home = () => {
    return (
        <div>
            <div style={{width: '60%'}}>
                <MultipleGridImages images={[
                "../Photos/kokous1.jpeg",
                "../photos/kolvaus1.jpeg",
                "../photos/kolvaus2.jpg",
                "../photos/kolvaus3.jpg",
                "../photos/kolvaus4.jpg",
                "../photos/konstaRpi.jpeg",
                "../photos/rpiMoist.jpeg",
                "../photos/rpiPek.jpeg",
                "../photos/rpiTemp.jpeg",
                "../photos/valkosipulivk1.jpeg",
                "../photos/valkosipulivk2.jpg",
                "../photos/valkosipulivk3.jpg"]}/>
            </div>
        </div>

    );
};


export default Home;