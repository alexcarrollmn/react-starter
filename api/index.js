var router = require('express').Router();
var request = require('request');
var requireNew = require('require-new');

// split up route handling
router.use('/status/:status', function(req, res){
    var servers = requireNew('./status.json');
    switch (req.params.status){
        case 'all':
            res.json(servers);
            break;
        case 'active':
            var active = requireNew('./status.json');
            delete active.status.servers.failed;
            delete active.status.servers.idle;
            res.json(active);
            break;
        case 'idle':
            var idle = requireNew('./status.json');
            delete idle.status.servers.active;
            delete idle.status.servers.failed;
            res.json(idle);
            break;
        case 'failed':
            var failed = requireNew('./status.json');
            delete failed.status.servers.active;
            delete failed.status.servers.idle;
            res.json(failed);
            break;
        default:
            res.json(servers)
            break;
    }
});
router.use('/tm1s/:server', function(req, res){
    res.json(require('./server_status_'+req.params.server+'.json'));
});

module.exports = router;