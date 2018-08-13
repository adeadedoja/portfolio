import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class top extends Component {
    render() {
        return (
            <div className="container top__hero">
                <div className="h-100">
                    <div className="row">
                        <div className="col-md-6 top__hero__info">
                            <h1 className="top__hero__text top__hero--bold pt-4 mt-0">Hi, I'm Dami. <br/> A Full Stack Developer</h1>
                            <p>My goal is to create visual experience on all platforms to help business clients grow and compete actively.</p>
                            <p className="top__hero__projectlink"><a href="#portfolio">VIEW MY PORTFOLIO <FontAwesomeIcon icon="arrow-right" /></a> <a className="btn btn-sm btn-primary ml-3 text-white pr-4 pl-4" href="https://www.dropbox.com/s/23p7llky5qnauv7/adedoja_adedamola_cv.pdf?dl=0"><FontAwesomeIcon icon="download" /> DOWNLOAD CV</a></p>
                        </div>
                        <div className="col-md-6 p-4">
                            <img src="../images/work.svg" className="img-fluid" alt="work icon"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default top;