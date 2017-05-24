var React = require('react');
var Header = require('./Nav');

class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header />
                Hello there dolly
            </div>
        )
    }
}

module.exports = App;