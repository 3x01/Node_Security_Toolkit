
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_NULL_Session = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Control\\Lsa\\MSV1_0" /v allownullsessionfallback /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Disable NTLM sessions that are allowed to fall back to Null (unauthenticated) sessions for preventing unauthorized access`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_NULL_Session
        