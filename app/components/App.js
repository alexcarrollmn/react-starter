var React = require('react');
var Header = require('./Header/Header');
var Servers = require('./Servers/Servers');
import './content.scss';

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Header />
				<div className="content--wrapper">
					<div className="content">
						<Servers />
					</div>
				</div>
			</div>
		)
	}
}

module.exports = App;
