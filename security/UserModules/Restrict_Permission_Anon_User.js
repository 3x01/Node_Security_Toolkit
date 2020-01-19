
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Restrict_Permission_Anon_User = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Control\\Lsa" /v EveryoneIncludesAnonymous /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Restrict the permissions of anonymous users`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Restrict_Permission_Anon_User
        