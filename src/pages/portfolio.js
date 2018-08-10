import React, { Component } from 'react';
import BigPortfolio from './bigportfolio'
import SmallPortfolio from './smallportfolio'

class portfolio extends Component {

    render() {
        return (
            <div className="container">
                <div className="portfolio">
                    <BigPortfolio></BigPortfolio>
                    <SmallPortfolio></SmallPortfolio>
                </div>
      
            </div>
        );
    }
    
}

export default portfolio;