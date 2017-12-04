var argv = require('yargs').argv;
var cmd = argv._[0]

if(cmd=="hello" && typeof argv.name !== 'undefined'){
    console.log(`hello ${argv.name}`)
}
else if (cmd == 'hello') {
    console.log("love")
}
console.log(argv)