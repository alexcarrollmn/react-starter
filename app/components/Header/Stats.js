import React from 'react';
import './stats.scss';

class Stats extends React.Component {
    render() {
        return(
            <div className="stats">
                <div className="stats--section">
                    <p className="stats--section_header">Gateway 1</p>
                    <p className="stats--section_status">Live</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Gateway 1</p>
                    <p className="stats--section_status">Idle</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Routers online</p>
                    <p className="stats--section_status">18</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Requests per second</p>
                    <p className="stats--section_status">25,325</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Total CPU load</p>
                    <p className="stats--section_status">23%</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Cost</p>
                    <p className="stats--section_status">$235</p>
                </div>
            </div>
            
        )
    }
}

export default Stats;