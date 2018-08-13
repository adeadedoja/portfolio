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
                            <li>DuoPorta Vehicle API</li>
                        </ul>
                        <p> I did the original design for CarCliq, however, that was a while ago and we wanted something a bit more different. The old design seemed a bit cluttered, there was a lot of technical debt. </p>
                        <p>The new version has a better code structure, was written better, with a more modern feel that is minimal. </p> 
                        <p>Still a work in progress but definitely on the right path. </p>
                        <a href="http://demo.carcliq.co.za" target="_blank"><b>VISIT WEBSITE</b></a>
                    </div>
                    <div className="col-md-8">
                        <img src="../images/carcliq.jpg" className="img-fluid" alt="carcliq" />
                    </div>
                </div>
                <div className="portfolio__big row">
                    <div className="col-md-8">
                        <img src="../images/unsigned.jpg" className="img-fluid" alt="unsignedafrika" />
                    </div>
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FULL STACK DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">UnsignedAfrika</h1>
                        <ul>
                            <li>Laravel</li>
                            <li>VueJS</li>
                            <li>VueRouter</li>
                        </ul>
                        <p>Client requested a SPA. Something similar to Spotify. With the ability to stream music and be able to move seamlessly from one page to another without any interruption in the song. That neccesitated a VueJS front end, with VueRouter for routing and Laravel serving up the API. The application was complete with user authentication, a messaging feature etc</p>
                        <a href="http://unsignedafrika.com" target="_blank"><b>VISIT WEBSITE</b></a>
                    </div>
                </div>
                <div className="portfolio__big row">
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FULL STACK & MOBILE APP DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">CEM Estate Management APP</h1>
                        <ul>
                            <li>Laravel</li>
                            <li>VueJS</li>
                            <li>React Native</li>
                        </ul>
                        <p>The client requested for an estate management application. The application is to be managed in the back office off a web platform, while the actual users access it via mobile app. The back office was built with a combination of Laravel and VueJS while the mobile application was built using ReactNative.  </p>
                    </div>
                    <div className="col-md-8">
                        <img src="../images/cem.jpg" className="img-fluid" alt="cem" />
                    </div>
                </div>
            </div>
        );
    }
}

export default bigportfolio;