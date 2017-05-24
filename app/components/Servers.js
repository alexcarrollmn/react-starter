var React = require('react');
import './servers.scss';

class Servers extends React.Component {
    render() {
        return(
            <table className="servers">
                <tr className="servers--header">
                    <td>header</td>
                </tr>
                <tr>
                    <td>
                        cell
                    </td>
                </tr>
            </table>
        )
    }
}

module.exports = Servers;