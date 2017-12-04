var crypto = require('crypto-js');

var secretMessage = {
    name: 'Shubham',
    age: 'salo'
}

var secretKey = 'abc'

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted message is '+ encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey)
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.utf8));
console.log(decryptedMessage)
console.log(decryptedMessage.secretName)