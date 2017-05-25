import React from 'react';
import './header.scss';
class HeaderControl extends React.Component {
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
                    <p>Last 30 days</p>
                    <p className="header--control_data">
                        $17,525
                    </p>
                </div>
                <div className="header--control_section">
                    <p>Last 7 days</p>
                    <p className="header--control_data">
                        $2,858
                    </p>
                </div>
            </div>
        )
    }
}

export default HeaderControl;