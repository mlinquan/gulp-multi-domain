var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');

var PluginError = gutil.PluginError;
var PLUGIN_NAME = 'gulp-multi-domain';

function replaceDomains(data, opts) {
  if(!data) {
    return;
  }
  var baseRegExp = new RegExp(opts.base, 'g');
  var match = data.match(baseRegExp);
  if(match && match.length) {
    var i = 0;
    match.forEach(function(item) {
      if(i >= opts.domains.length) {
        i = 0;
      }
      var domain = opts.domains[i];
      data = data.replace(opts.base, domain);
      i++;
    })
  }
  return data;
}

function gulpMultiDomain(opts) {
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(null, file);
			return;
		}

		if (!file.contents.toString()) {
			cb(null, null);
			return;
		}

    try {
      var res = replaceDomains(file.contents.toString(), opts);
      file.contents = new Buffer(res);
    } catch (err) {
      console.log(err);
    }

    cb(null, file);
	});
};

module.exports = gulpMultiDomain;