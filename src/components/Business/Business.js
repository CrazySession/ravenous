import React, { Component } from 'react';
import { bData } from './businessData';
import './Business.css';

class Business extends Component {
    render() {
        return (
            <div className='Business'>
                <div className='image-container'>
                    <img src={bData.src}
                         alt={bData.name} />
                </div>
                <h2>{bData.name}</h2>
                <div className='Business-information'>
                    <div className='Business-address'>
                        <p>{bData.address}</p>
                        <p>{bData.city}</p>
                        <p>{bData.state} {bData.zipCode}</p>
                    </div>
                    <div className='Business-reviews'>
                        <h3>{bData.category}</h3>
                        <h3 className="rating">{bData.rating}</h3>
                        <p>{bData.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business
