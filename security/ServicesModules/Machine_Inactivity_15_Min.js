
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Machine_Inactivity_15_Min = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System" /v InactivityTimeoutSecs  /t REG_DWORD /d 0x00000384 /f`)
            ps.invoke().then(output => {
                console.log(`Set the screen saver at a maximum of 15 minutes`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Machine_Inactivity_15_Min
        