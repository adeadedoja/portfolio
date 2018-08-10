import React, { Component } from 'react';

class bigportfolio extends Component {
    render() {
        return (
            <div>
                <div className="portfolio__big row">
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FULL STACK DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">CarCliq V2</h1>
                        <ul>
                            <li>Laravel</li>
                            <li>VueJS</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor, neque et fermentum efficitur, nibh nulla fermentum purus, non vestibulum ante diam ut nunc. Phasellus iaculis leo sed pulvinar rutrum. Maecenas mattis tincidunt metus, ut vulputate eros interdum vitae. Nulla porttitor elit ac justo molestie, tristique scelerisque elit dictum. </p>
                        <p class="pt-4 textcolor1"><b>CASE STUDY COMING SOON</b></p>
                    </div>
                    <div className="col-md-8">
                        <img src="../images/carcliq.jpg" className="img-fluid" alt="carcliq" />
                    </div>
                </div>
                <div className="portfolio__big row">
                    <div className="col-md-8">
                        <img src="../images/carcliq.jpg" className="img-fluid" alt="unsignedafrika" />
                    </div>
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FULL STACK DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">UnsignedAfrika</h1>
                        <ul>
                            <li>Laravel</li>
                            <li>VueJS</li>
                            <li>VueRouter</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor, neque et fermentum efficitur, nibh nulla fermentum purus, non vestibulum ante diam ut nunc. Phasellus iaculis leo sed pulvinar rutrum. Maecenas mattis tincidunt metus, ut vulputate eros interdum vitae. Nulla porttitor elit ac justo molestie, tristique scelerisque elit dictum. </p>
                        <p class="pt-4 textcolor1"><b>CASE STUDY COMING SOON</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default bigportfolio;