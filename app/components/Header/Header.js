import React, {Component} from 'react';
import Stats from "./Stats";
import HeaderControl from "./HeaderControl";
import {fetchAllServers} from '../../utils/api';

import './header.scss';

class Header extends Component {
    constructor(props){
        super();
        this.state = {
            stats: null
        }
    }
    componentDidMount(){
        fetchAllServers().then(function(data){

            console.log("header data", data)
            this.setState(function(){
                return {stats: data}
            });
        }.bind(this));
    }
    render() {
        return(
            <div className="header">
                <div className="header--bar">
                    <h1>PA On Demand Data Dashboard</h1>
                </div>
                {!this.state.stats ? <p>loading</p> :
                <div className="header--wrapper">
                    
                    <HeaderControl 
                        stats={this.state.stats}
                    />
                    <Stats
                        stats={this.state.stats}
                    />
                </div>
                }
            </div>
        )
    }
}

export default Header;