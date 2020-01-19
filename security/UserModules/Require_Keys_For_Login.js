
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Require_Keys_For_Login = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System" /v DisableCAD  /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Enable the Ctrl+Alt+Del keys to login`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Require_Keys_For_Login
        