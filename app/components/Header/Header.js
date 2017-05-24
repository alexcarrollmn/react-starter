var React = require('react');
var Stats = require("./Stats");
import './header.scss';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                navigation
                <Stats/>
            </div>
        )
    }
}

module.exports = Header;