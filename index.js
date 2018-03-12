function StatsOutPlugin(output, options) {
  this.output = output;
  this.options = options;
  this.fields = typeof options.fields !== 'undefined' ? options.fields : ['assetsByChunkName'];
}

StatsOutPlugin.prototype.apply = function apply(compiler) {
  var output = this.output;
  var fields = this.fields;
  compiler.plugin('emit', function (compilation, done) {
    var result;
    compilation.assets[output] = {
      size: function () {
        return result ? result.length : 0;
      },
      source: function () {
        var stats = compilation.getStats().toJson();
        var result = fields.reduce(function (memo, key) {
          memo[key] = stats[key];
          return memo
        }, {});
        return JSON.stringify(result);
      }
    };
    done();
  });
};

module.exports = StatsOutPlugin;
