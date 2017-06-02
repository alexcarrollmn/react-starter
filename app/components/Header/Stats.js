import React from 'react';
import './stats.scss';

class Stats extends React.Component {
    constructor(props){
        super();
    }
    render() {
        console.log(this)
        return(
            <div className="stats">
                <div className="stats--section">
                    <p className="stats--section_header">Gateway 1</p>
                    <p className="stats--section_status">Live</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Gateway 2</p>
                    <p className="stats--section_status">Idle</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Routers online</p>
                    <p className="stats--section_status">{this.props.stats.status.routing.router_count.toLocaleString('en')}</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Requests per second</p>
                    <p className="stats--section_status">{this.props.stats.status.routing.requests.instant.toLocaleString('en')}</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Total CPU load</p>
                    <p className="stats--section_status">{this.props.stats.status.routing.total_instant_cpu}%</p>
                </div>
                <div className="stats--section">
                    <p className="stats--section_header">Cost today</p>
                    <p className="stats--section_status">${this.props.stats.status.cluster_costs.today.toLocaleString('en')}</p>
                </div>
            </div>
            
        )
    }
}

export default Stats;