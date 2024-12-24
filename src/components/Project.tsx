import React from "react";
import northino from '../assets/images/northino.png';
import bookbay from '../assets/images/bookbay.png';
import pailot from '../assets/images/pailot.png';
import kec from '../assets/images/kec.png';
import ctrlf2 from '../assets/images/ctrlf2.png';
import pos from '../assets/images/pos.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Recents Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.northino.com/" target="_blank" rel="noreferrer"><img src={northino} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.northino.com/" target="_blank" rel="noreferrer"><h2>Northino Learning</h2></a>
                <p>Northino is an innovative e-learning platform dedicated to breaking language barriers in digital education for Africa.</p>
            </div>
            <div className="project">
                <a href="https://bookbay-app.vercel.app/" target="_blank" rel="noreferrer"><img src={bookbay} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bookbay-app.vercel.app/" target="_blank" rel="noreferrer"><h2>BookBay</h2></a>
                <p>Bookbay is a decentralized social networking textbook borrowing platform that solves the problem of textbook borrowing using a peer-to-peer protocol.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={pailot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Pailot</h2></a>
                <p>A peer-to-peer decentralized logistics platform by pioneers, for pioneers.</p>
            </div>
            <div className="project">
                <a href="ctrlf2.com" target="_blank" rel="noreferrer"><img src={ctrlf2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="ctrlf2.com" target="_blank" rel="noreferrer"><h2>Ctrl F2</h2></a>
                <p>A Software Development Agency that provides consulting, outsourcing, seo and cloud hosting</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={pos} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>RetailRise POS</h2></a>
                <p>An Inventory management system.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={kec} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>KEC Ticket System</h2></a>
                <p>A Ticket management system</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;