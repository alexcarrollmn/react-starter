var React = require('react');
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Nav />
                Hello there dolly
            </div>
        )
    }
}

module.exports = App;