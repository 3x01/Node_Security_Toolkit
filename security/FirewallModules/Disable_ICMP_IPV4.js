
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Disable_ICMP_IPV4 = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`netsh advfirewall firewall add rule name='ICMP Allow incoming V4 echo request' protocol=icmpv4:8,any dir=in action=allow`)
            ps.invoke().then(output => {
                console.log(`Disable the ICMP (IPV4) requests`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Disable_ICMP_IPV4
        