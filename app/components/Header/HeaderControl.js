import React from 'react';
import './header.scss';


class HeaderControl extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return(
            <div className="header--control">
                <div className="header--control_section">
                    {/* I am purposefully spelling it the American way ;) */}
                    <p>Data Center</p>
                    <p className="header--control_data">
                        Data Center 1
                    </p>
                </div>
                <div className="header--control_section">
                    <p>For date range</p>
                    <p className="header--control_data">
                        May 2017
                    </p>
                </div>
                <div className="header--control_section">
                    <p>Last month</p>
                    <p className="header--control_data">
                        ${this.props.stats.status.cluster_costs.last_month.toLocaleString('en')}
                    </p>
                </div>
                <div className="header--control_section">
                    <p>This month</p>
                    <p className="header--control_data">
                        ${this.props.stats.status.cluster_costs.this_month.toLocaleString('en')}
                    </p>
                </div>
            </div>
        )
    }
}

export default HeaderControl;