var pathModule = require('path');

module.exports = function(data) {
  data = data || {};
  var functions = [
    {
      name: 'revisionedPath',
      func: function (fullPath) {
        var path = pathModule.basename(fullPath);
        if (data.manifest) {
          if(!data.manifest[path]) {
            throw new Error('File '+path+' seems to not be revisioned');
          }
          return pathModule.join(pathModule.dirname(fullPath),
            data.manifest[path]);
        } else {
          return fullPath;
        }
      }
    },
    {
      name: 'assetPath',
      func: function (path) {
        return pathModule.join(data.config.dest.assets, path);
      }
    }
  ];

  return functions;
}
