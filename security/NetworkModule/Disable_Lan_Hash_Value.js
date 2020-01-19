
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_Lan_Hash_Value = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Lsa" /v NoLMHash  /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Disable storing the hash of the password in the LAN Manager`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_Lan_Hash_Value
        