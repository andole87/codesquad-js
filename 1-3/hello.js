var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server is listening on 8080...');
});

/*구름 IDE 환경*/
//node 10
//프로젝트루트 ~/workspace/step1/1-3/server.js
//ssh -p 52725 root@13.125.109.66