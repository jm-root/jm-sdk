# jm-sdk

sdk lib for jm-* projects

- install

```javascript
npm install --save jm-sdk
```

- ES6

```javascript
import Sdk from 'jm-sdk';
let sdk = new Sdk();
sdk.logger.debug('works.');

```

- node

```javascript
var Sdk = require('jm-sdk');
var sdk = new Sdk();
sdk.logger.debug('works.');

//也可以采用全局变量jm，不推荐
require('jm-sdk');
jm.sdk.logger.debug('works.');

```

- browser

```
<script src="dist/js/jm-sdk.js"></script>
<script>
    jm.sdk.logger.debug('works.');
</script>
```
