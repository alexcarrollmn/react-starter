import React, {Component} from 'react';
import './servers.scss';
import {fetchAllServers} from '../../utils/api';
import {fetchServer} from '../../utils/api';

function SelectedStatus(props){
    var statuses = ['all', 'active', 'idle', 'failed'];

    return (
        <ul className="status">
            {statuses.map(function(status){
                return(
                    <li style={status === props.selectedStatus ? {color: '#f00'} : null}
                        onClick={props.onSelect.bind(null, status)}
                        key={status}>
                        {status}
                    </li>
                )
            })
        }
        </ul>
    )
}

function ServersTable(props){
    {console.log("props",props);}
    
    return(
        <table className="servers">
            <thead>
                <tr className="servers--header">
                    <th className="servers--cell_wide">Server name</th>
                    <th>Memory usage</th>
                    <th>CPU</th>
                    <th>Idle time</th>
                    <th className="servers--cell_narrow">Cost</th>
                </tr>
            </thead>
            <tbody>
                {props.servers.status.servers.active.map(function(server, index){
                    return (
                        <tr key={server} className="servers--row">
                            <td className="servers--cell servers--cell_bold servers--cell_wide">
                            {server}
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
                    )
                })}
                
            </tbody>



        </table>

    )
}

class Servers extends Component {
    constructor(props){
        super();
        this.state = {
            selectedStatus: 'all',
            servers: null
        }
        this.updateStatus = this.updateStatus.bind(this);
    }
    componentDidMount(){
        this.updateStatus(this.state.selectedStatus);
    }
    updateStatus(status){
        this.setState(function(){
            return{
                selectedStatus: status
            }
        });

        fetchAllServers(status).then(function(servers){
            console.log("fetchAllServers", servers)
            this.setState(function(){
                return {servers: servers}
            })
            
        }.bind(this));
    }
    render() {
        return(
            <div>
                <SelectedStatus
                    selectedStatus = {this.state.selectedStatus}
                    onSelect = {this.updateStatus} />
                {!this.state.servers ? <p>loading</p> : <ServersTable servers={this.state.servers} />}
                
            </div>
        )
    }
}

export default Servers;