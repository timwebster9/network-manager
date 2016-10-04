module.exports = {

  ping: function (host, cb) {
    var cp = require('child_process');
    var command = 'ping -c 1 ' + host;

    cp.exec(command, {timeout: 1500},
      function (err, stdout, stderr) {
        if (err) {
          cb('down');
        }
        else {
          cb('up');
        }
      }
    );
  },

  shutdown: function (host) {
    var cp = require('child_process');
    var command = 'net rpc -S ' + host + ' -U timw%webs5358 shutdown -t 1 f'

    cp.exec(command, {timeout: 1500}, 
      function (err, stdout, stderr) {
        if (err) {
          console.log('Error shutting down ' + host)
        }
        else {
          console.log('Shut down ' + host + ' successfully')
        }
      }
    );
  },

  test: function (host, cb) {
    this.ping(host, cb);

  //test: function (host) {
  //  this.ping(host, function(id) {
  //    console.log(host + ' is ' + id);
  //    if (id == 'up') {
  //      shutdown(host)
  //    }
  //  });
  }
};


