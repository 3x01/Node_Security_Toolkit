
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Prevent_Remote_Assistance = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services" /v fAllowUnsolicited  /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                console.log(`Prevent unsolicited offers of help to the system`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Prevent_Remote_Assistance
        