
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Block_All_Ports = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`netsh advfirewall set allprofiles firewallpolicy blockinboundalways,allowoutbound`)
            ps.invoke().then(output => {
                console.log(`Block all incoming connections`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Block_All_Ports
        