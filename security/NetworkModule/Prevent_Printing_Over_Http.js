
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Prevent_Printing_Over_Http = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Printers" /v DisableHTTPPrinting /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Configure the system to the prevent printing over HTTP`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Prevent_Printing_Over_Http
        