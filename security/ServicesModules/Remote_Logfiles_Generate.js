
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Remote_Logfiles_Generate = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services" /v LoggingEnabled /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                console.log(`Generate the log files on Remote Assistance`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Remote_Logfiles_Generate
        