import React from 'react';
import './style.css';

export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">User Directory</h1>
                <p className="lead">Use search box to narrow your results or sort by categories.</p>
            </div>
        </div>
    )
}
