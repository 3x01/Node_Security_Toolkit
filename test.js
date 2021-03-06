const powershell = require('node-powershell');
const fs = require('fs');
const os = require('os');

let ps = new powershell({
    executionPolicy: 'Bypass',
    noProfile: true
});
// ps.on('end', code => {console.log("Shell closed")});

ps.addCommand('. ./pentest/powershell/powerup.ps1');
ps.addCommand('Invoke-AllChecks');
ps.invoke().then(output => {
    console.log(output);
    ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
}).catch(err => {
    console.log(err);
    ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
})