
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Safe_DLL_Search_Mode = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Session Manager" /v SafeDllSearchMode /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                console.log(`Search the %systemroot% for the DLL before searching the current directory or the rest of the path`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Safe_DLL_Search_Mode
        