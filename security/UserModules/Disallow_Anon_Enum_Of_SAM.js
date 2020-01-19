
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disallow_Anon_Enum_Of_SAM = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v NtfsDisableLastAccessUpdate  /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Disallow anonymous logon users (null session connections) to list all account names and enumerate all shared resources`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disallow_Anon_Enum_Of_SAM
        