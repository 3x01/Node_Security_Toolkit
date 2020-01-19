
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let NTFS_Update_Disable = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Control\\Lsa" /v RestrictAnonymous  /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                console.log(`Disable the NTFS updates for extra performance out of the disk volumes`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = NTFS_Update_Disable
        