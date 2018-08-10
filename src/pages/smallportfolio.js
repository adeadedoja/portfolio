import React, { Component } from 'react';
const projects = [
    {id:1, name:'Wizkid Pop Up Store', imgurl: 'wiz.jpg' },
    {id:1, name:'1711 Designs', imgurl: '1711.jpg' },
    {id:1, name:'Adele & Omar', imgurl: 'adele.jpg' },
];

const projectItems = projects.map((project) =>
    <div className="portfolio__small col-md-3" key={project.id}>
        <img src={'../images/'+project.imgurl} className="img-fluid" alt={project.name} />
        <p className="text-center textcolor1"><b>{project.name}</b></p>
    </div>
);

class smallportfolio extends Component {
    render() {
        return (
            <div>
                <div className="row">
                   {projectItems}
                </div>
            </div>
        );
    }
}

export default smallportfolio;