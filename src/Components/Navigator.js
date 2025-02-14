import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Navigator = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to ="/" >TinyForest</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navigationbar" aria-controls="navigationbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse" id="navigationbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/system">System Information</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/plants">My Plants</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};


export default Navigator;