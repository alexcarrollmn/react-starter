var React = require('react');
var Header = require('./Header/Header');

var Servers = require('./Servers');

class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header />
                <Servers />
            </div>
        )
    }
}

module.exports = App;