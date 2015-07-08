var tinylr = require('tiny-lr');

exports.serve = serve;
function serve (broccoli, builder, options) {
  console.log('LiveReloading on http://' + options.host + ':' + options.liveReloadPort + '\n');

  var server = broccoli.server.serve(builder, options);

  var livereloadServer = new tinylr.Server;
  livereloadServer.listen(options.liveReloadPort, function (err) {
    if(err) {
      throw err;
    }
  });

  var liveReload = function() {
    // Chrome LiveReload doesn't seem to care about the specific files as long
    // as we pass something.
    livereloadServer.changed({body: {files: ['livereload_dummy']}});
  };

  server.watcher.on('change', function(results) {
    liveReload();
  });
}
