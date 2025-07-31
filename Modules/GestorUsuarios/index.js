const userManeger = require('./userManager');
const showSystemInfo = require('./systemInfo')

// Operaciones con usuarios.

userManeger.addUser('Miguel');
userManeger.addUser('Camila');
userManeger.addUser('Oliver');
userManeger.addUser('Margarita');

userManeger.listUsers();

userManeger.removeUser('Oliver');
userManeger.listUsers();
userManeger.removeUser('Pedro');

console.log('\n----------------------\n')
showSystemInfo();