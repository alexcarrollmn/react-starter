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
		console.log("this", this.props.servers.status.servers.idle.length);
		return (
			<ul className="servers--status">
				{statuses.map(function(status){
					var activeClass = '' , failedClass = '';
					if (this.props.selectedStatus === status){
						activeClass = " servers--status_link-active"
					}
					if(status === 'failed'){
						failedClass = " servers--status_link-failed"
					}
					return(
						<li className={"servers--status_link" + activeClass + failedClass}
							onClick={this.props.onSelect.bind(null, status)}
							key={status}>
							{status=='active' ? this.props.servers.status.servers.active.length + ' ': ''}
							{status=='idle' ? this.props.servers.status.servers.idle.length + ' ': ''} 
							{status=='failed' ? this.props.servers.status.servers.failed.length + ' ': ''}
							{status} servers 
							
						</li>
					)
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
		console.log("server row", this);
		let mem_use = Math.floor((this.props.server.info.server_status.max_mem_use.instant / this.props.server.info.server_status.configuration.mem_limit) * 100);
		let failedClass = '';
		if(this.props.server.info.server_status.state === 'failed'){
			failedClass = ' servers--row_failed';
		}
		return (
			<tr className={"servers--row" + failedClass}>
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
				{!this.state.servers ? <p>loading</p> : <div><SelectedStatus
					selectedStatus = {this.state.selectedStatus}
					onSelect = {this.updateStatus}
					servers={this.state.servers} />
					<ServersTable servers={this.state.servers} status={this.state.selectedStatus} /></div>}
				
			</div>
		)
	}
}

export default Servers;