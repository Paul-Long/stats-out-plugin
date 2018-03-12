# stats-out-plugin

---

output the stats to a file by fileds.

## Installation

```bash
$ npm install stats-out-plugin
```

## Usage

```javascript
var StatsOutPlugin = require('stats-out-plugin');
module.exports = {
  plugins: [
    new StatsOutPlugin('stats.json', {
      fields: ['assetsByChunkName']
    })
  ]
}
```

fields default `['assetsByChunkName']`