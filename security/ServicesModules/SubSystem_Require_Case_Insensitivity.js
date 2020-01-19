
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let SubSystem_Require_Case_Insensitivity = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Kernel" /v ObCaseInsensitive /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                console.log(`Require the case insensitivity restrictions for preventing the access of files or commands that must be restricted`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = SubSystem_Require_Case_Insensitivity
        