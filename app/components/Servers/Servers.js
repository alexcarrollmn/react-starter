import React, {Component} from 'react';
import './servers.scss';
import {fetchAllServers} from '../../utils/api';
import {fetchServer} from '../../utils/api';

class SelectedStatus extends Component{
	constructor(props){
		super();
	}
	render(){
		var statuses = ['all', 'active', 'idle', 'failed'];

		return (
			<ul className="status">
				{statuses.map(function(status){
					if(status == 'all'){
						return(
							<li style={status === this.props.selectedStatus ? {color: '#f00'} : null}
								onClick={this.props.onSelect.bind(null, status)}
								key={status}>
								{status} servers 
							</li>
						)
					}
					else{
						return(
							<li style={status === this.props.selectedStatus ? {color: '#f00'} : null}
								onClick={this.props.onSelect.bind(null, status)}
								key={status}>
								servers {status} 
							</li>
						)
					}
				}.bind(this))
			}
			</ul>
		)
	}
	
}

class ServersTable extends Component{
	constructor(props){
		super();
	}
	render(){
		var rows=[];

		this.props.servers.servers.map(function(server, index){
			console.log(this)
			if(this.props.status=='all'){
				rows.push(<ServerRow server={server} key={server.name} />)
			}
			else if(this.props.status == server.info.server_status.state){
				rows.push(<ServerRow server={server} key={server.name} />)
			}
			console.log(this.state)
			console.log("server", server);
			//rows.push(<ServerRow server={server} key={server.name} />)
		}.bind(this))
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
	
}

class ServerRow extends Component{
	constructor(props){
		super();
	}
	render(){
		console.log(this);
		let mem_use = Math.floor((this.props.server.info.server_status.max_mem_use.instant / this.props.server.info.server_status.configuration.mem_limit) * 100);
   
		return (
			<tr className="servers--row">
				<td className="servers--cell servers--cell_bold servers--cell_wide">
				{this.props.server.name} 
				</td>
				<td className="servers--cell">
					{mem_use}% of {Math.floor(this.props.server.info.server_status.configuration.mem_limit/1024)} GB
				</td>
				<td className="servers--cell">
					{this.props.server.info.server_status.cpu_time_use.instant}%
				</td>
				<td className="servers--cell">
					1 day
				</td>
				<td className="servers--cell servers--cell_bold servers--cell_narrow">
					${this.props.server.info.server_status.direct_cost.this_month}
				</td>
			</tr>
		)
	}
	
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
		fetchAllServers().then(function(servers){
			console.log("fetchAllServers", servers)
			this.setState(function(){
				return {servers: servers}
			})
			
		}.bind(this));
	}
	updateStatus(status){
		this.setState(function(){
			return{
				selectedStatus: status
			}
		});

		
	}
	render() {
		return(
			<div>
				<SelectedStatus
					selectedStatus = {this.state.selectedStatus}
					onSelect = {this.updateStatus} />
				{!this.state.servers ? <p>loading</p> : <ServersTable servers={this.state.servers} status={this.state.selectedStatus} />}
				
			</div>
		)
	}
}

export default Servers;