import React, { useState } from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

const ImageGallery = props => {

    const images = [
        "../photos/kokous1.jpeg",
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
        "../photos/valkosipulivk3.jpg"]

    const [index, setIndex] = useState(0)

    return (
            <Gallery
                style={{
                    height: '50vh',
                    width: '60vw',
                    background: 'black'
                }}
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {images.map(image => (
                    <GalleryImage objectFit="fit" src={image} />
                ))}
            </Gallery>
    );
};


export default ImageGallery;