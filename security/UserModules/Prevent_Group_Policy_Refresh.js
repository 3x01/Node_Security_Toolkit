
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Prevent_Group_Policy_Refresh = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\system" /v DisableBkGndGroupPolicy  /t REG_DWORD /d 0 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Set Group Policy settings not to be refreshed while a user is currently logged on`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Prevent_Group_Policy_Refresh
        