
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_File_Sharing = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`netsh advfirewall firewall set rule group="File and Printer Sharing" new enable=No`)
            ps.invoke().then(output => {
                console.log(`Disable File and Printer Sharing.`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_File_Sharing
        