var store = require('node-persist');
store.initSync();

store.setItemSync('accounts',[{username:'halleshubham', balence : 200}]);

var data = store.getItemSync('accounts')

console.log(`Hies ${data[0].username}`)
