
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Enable_Firewall = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`netsh advfirewall set allprofiles state on`)
            ps.invoke().then(output => {
                console.log(`Enable firewall on all profiles`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Enable_Firewall
        