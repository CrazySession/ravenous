import React, { Component } from 'react';
import BusinessList from '../BusinessList/BusinessList';

class App extends Component {
    render(){
        return (
            <div>
                <BusinessList/>
                <BusinessList/>
                <BusinessList/>
                <BusinessList/>
                <BusinessList/>
            </div>
        )
    }
}

export default App