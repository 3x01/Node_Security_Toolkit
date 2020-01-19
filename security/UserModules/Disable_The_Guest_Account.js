
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_The_Guest_Account = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`net user guest /active:no`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Disable the guest accounts for preventing temporary login on a Windows system without requiring to provide credentials/password`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_The_Guest_Account
        