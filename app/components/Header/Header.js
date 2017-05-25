import React from 'react';
import {Stats} from "./Stats";
import {HeaderControl} from "./HeaderControl";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="header--bar">
                    <h1>PA On Demand Data Dashboard</h1>
                </div>
                <div className="header--wrapper">
                    <HeaderControl />
                    <Stats/>
                </div>
            </div>
        )
    }
}

export default Header;