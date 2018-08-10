import React, { Component } from 'react';

class top extends Component {
    render() {
        return (
            <div className="container top__hero">
                <div className="h-100">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>HI, I'M DAMI</h5>
                            <h1 className="top__hero--bold">FULL STACK DEVELOPER</h1>
                            <p>My goal is to create visual experience on all platforms to help business clients grow and compete actively.</p>
                            <p class="mt-4"><a href="">MY PROJECT</a></p>
                        </div>
                        <div className="col-md-6">
                            <img src="../images/coding.svg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default top;