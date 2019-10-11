import React from 'react';
import ModalList from './ModalList';
//import ModalGrid from './ModalGrid';


// TODO fix modallist to display right item

const Home = () => {
    return (
        <div>
            <div className="wrapper">
                <h1 style={{padding:10, fontSize:45}}>Welcome to TinyForest</h1>
                <ModalList />
            </div>
        </div>
    );
};


export default Home;