
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_Sending_Pass_SMB = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Services\\NetBT\\Parameters" /v EnablePlainTextPassword /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                console.log(`Some non-Microsoft SMB servers only support unencrypted (plain text) password authentication. Disable sending plain text passwords across the network, when authenticating to an SMB server, for increasing the overall security of the environment`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_Sending_Pass_SMB
        