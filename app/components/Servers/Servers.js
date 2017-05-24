var React = require('react');
import './servers.scss';

class Servers extends React.Component {
    render() {
        return(
            <table className="servers">
                <tr className="servers--header">
                    <th className="servers--cell_wide">Server name</th>
                    <th>Memory usage</th>
                    <th>CPU</th>
                    <th>Idle time</th>
                    <th className="servers--cell_narrow">Cost</th>
                </tr>
                <tr className="servers--row">
                    <td className="servers--cell servers--cell_bold servers--cell_wide">
                        TM1 Server A
                    </td>
                    <td className="servers--cell">
                        20% of 80GB
                    </td>
                    <td className="servers--cell">
                        5%
                    </td>
                    <td className="servers--cell">
                        1 day
                    </td>
                    <td className="servers--cell servers--cell_bold servers--cell_narrow">
                        $12300
                    </td>
                </tr>
                <tr className="servers--row">
                    <td className="servers--cell servers--cell_bold servers--cell_wide">
                        TM1 Server A
                    </td>
                    <td className="servers--cell">
                        20% of 80GB
                    </td>
                    <td className="servers--cell">
                        5%
                    </td>
                    <td className="servers--cell">
                        1 day
                    </td>
                    <td className="servers--cell servers--cell_bold servers--cell_narrow">
                        $12300
                    </td>
                </tr>
                <tr className="servers--row">
                    <td className="servers--cell servers--cell_bold servers--cell_wide">
                        TM1 Server A
                    </td>
                    <td className="servers--cell">
                        20% of 80GB
                    </td>
                    <td className="servers--cell">
                        5%
                    </td>
                    <td className="servers--cell">
                        1 day
                    </td>
                    <td className="servers--cell servers--cell_bold servers--cell_narrow">
                        $12300
                    </td>
                </tr>
                <tr className="servers--row">
                    <td className="servers--cell servers--cell_bold servers--cell_wide">
                        TM1 Server A
                    </td>
                    <td className="servers--cell">
                        20% of 80GB
                    </td>
                    <td className="servers--cell">
                        5%
                    </td>
                    <td className="servers--cell">
                        1 day
                    </td>
                    <td className="servers--cell servers--cell_bold servers--cell_narrow">
                        $12300
                    </td>
                </tr>
            </table>
        )
    }
}

module.exports = Servers;