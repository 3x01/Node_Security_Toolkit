
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Config_Classic_Security_Model = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Lsa" /v ForceGuest  /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Protect the local accounts with the classic model`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Config_Classic_Security_Model
        