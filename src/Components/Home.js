import React from 'react';
import ModalGrid from './ModalGrid';
import ModalList from './ModalList';

const Home = () => {
    return (
        <div>
            <div className="wrapper">
                <h1 style={{padding:10}}>Welcome to TinyForest</h1>
                <ModalList/>
            </div>
        </div>
    );
};


export default Home;