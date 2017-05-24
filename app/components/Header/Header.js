var React = require('react');
var Stats = require("./Stats");
var HeaderControl = require("./HeaderControl");
import './header.scss';

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

module.exports = Header;