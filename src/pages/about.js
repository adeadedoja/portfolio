import React, { Component } from 'react';

class about extends Component {
    render() {
        return (
            <div className="bg-grey">
                <div className="container">
                    <div className="row about">
                        <div className="col-md-4"><h2 className="about--bold textcolor1">Hi, Let me introduce myself.</h2></div>
                        <div className="col-md-8">
                            <p className="textcolor1"><b>I am currently a Developer at Accelerate Sales, Johannesburg</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor, neque et fermentum efficitur, nibh nulla fermentum purus, non vestibulum ante diam ut nunc. Phasellus iaculis leo sed pulvinar rutrum. Maecenas mattis tincidunt metus, ut vulputate eros interdum vitae. Nulla porttitor elit ac justo molestie, tristique scelerisque elit dictum. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;