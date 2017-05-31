import axios from 'axios';


export function fetchAllServers(){
    console.log("fetching?")
        return axios.get('/api/status').then(function(response){
            console.log("api.js all servers", response.data);
            return response.data;
        })
}

export function fetchServer(server){
    return axios.get('/api/tm1s/' + server).then(function(response){
        console.log("server", response.data);
    })
}