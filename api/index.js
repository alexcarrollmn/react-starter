var router = require('express').Router();
var request = require('request');
var requireNew = require('require-new');

// split up route handling
router.use('/status', function(req, res){
    var servers = requireNew('./status.json');
    servers.servers=[];
    for (var i=0;i<servers.status.servers.active.length;i++){
        var server = {name: servers.status.servers.active[i]};
        servers.servers.push(server);
    }
    for (var i=0;i<servers.status.servers.idle.length;i++){
        var server = {name: servers.status.servers.idle[i]};
        servers.servers.push(server);
    }
    for (var i=0;i<servers.status.servers.idle.length;i++){
        var server = {name: servers.status.servers.failed[i]};
        servers.servers.push(server);
    }
    for (var i=0;i<servers.servers.length;i++){
        servers.servers[i].info = require('./server_status_Active_1.json');
    }
    res.json(servers);
});
router.use('/tm1s/:server', function(req, res){
    res.json(require('./server_status_'+req.params.server+'.json'));
});

module.exports = router;