import axios from 'axios';


export function fetchAllServers(){
        return axios.get('/api/status').then(function(response){
            return response.data;
        }).catch(function(error){
            console.log(error);
        })
}

export function fetchServer(server){
    return axios.get('/api/tm1s/' + server).then(function(response){
        console.log("server", response.data);
    })
}