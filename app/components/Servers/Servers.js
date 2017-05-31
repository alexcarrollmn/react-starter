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
    var rows=[];
    props.servers.servers.forEach(function(server, index){
        rows.push(<ServerRow server={server} key={server.name} />)
        console.log(rows)
    })
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
                {rows}
                
            </tbody>



        </table>

    )
}

function ServerRow(props){
    console.log("server row",props);
    let mem_use = Math.floor((props.server.info.server_status.max_mem_use.instant / props.server.info.server_status.configuration.mem_limit) * 100);
    return (
        <tr className="servers--row">
            <td className="servers--cell servers--cell_bold servers--cell_wide">
            {props.server.name} 
            </td>
            <td className="servers--cell">
                {mem_use}% of {Math.floor(props.server.info.server_status.configuration.mem_limit/1024)} GB
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

        fetchAllServers().then(function(servers){
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