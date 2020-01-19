
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let RDP_Max_Security = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp" /v MinEncryptionLevel /t REG_DWORD /d 4 /f`)
            ps.invoke().then(output => {
                console.log(`Maximizes the security of a Remote Desktop Connection`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = RDP_Max_Security
        