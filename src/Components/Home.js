import React from 'react';
//import ModalList from './ModalList';
//import ModalGrid from './ModalGrid';
//import ImageGallery from './ImageGallery';
import MultipleGridImages from 'react-multiple-image-grid'


const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="gridimages">
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
                "../Photos/valkosipulivk3.jpg",
                "../Photos/jarjestelma07112019.jpg"]}/>
            </div>
            <div className="hometext">
                <h3>Monialaprojekti TinyForest</h3>
                <p>
                    Projektimme tarkoitus on tuottaa järjestelmä joka automatisoi kasvien kasvatusta ja monitoroi lämpötilaa, kosteutta ja valoa. 
                </p>
                <p>
                    Projektin osalliset ovat Juska Forelius (Projektipäällikkö), Niko Hakala, Konstantin Gurin ja Pekka Helenius.
                </p>
            </div>
        </div>

    );
};


export default Home;