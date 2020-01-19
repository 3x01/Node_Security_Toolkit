
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let IPSec_Exemptions_Limited = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\IPSEC" /v NoDefaultExempt  /t REG_DWORD /d 3 /f`)
            ps.invoke().then(output => {
                console.log(`Configure the Windows to limit IPSec exemptions`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = IPSec_Exemptions_Limited
        