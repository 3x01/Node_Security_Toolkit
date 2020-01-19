
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Allow_Only_LMA = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Control\\Lsa" /v LmCompatibilityLevel /t REG_DWORD /d 5 /f`)
            ps.invoke().then(output => {
                console.log(`The Kerberos v5 authentication protocol is the default for authentication for domains. NTLM which is less secure, is retained in later Windows versions for compatibility with standalone systems as well as applications that may still use it. Earlier versions of the LM/NTLM protocol are particularly vulnerable to attack and must be prevented.`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Allow_Only_LMA
        