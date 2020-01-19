const fs = require('fs');
const os = require('os');
const banner = require('./banner');
const {   
    GetWifiPasswords,
    GetRunningProcesses,
    GetSystemInfo,
    ListCurrentConnections,
    ListUsers,
    SearchRegistryForPassword,
    GetFirewallConfig,
    GetnetworkShares,
    ArpTable,
    ListInstalledApps,
    SeeStartupApps,
    InvokeReverseShell
} = require('./utilities');

const { 
    Disable_NULL_Session,
    Disable_The_Guest_Account,
    Restrict_Permission_Anon_User,
    Require_Keys_For_Login,
    Disallow_Anon_Enum_Of_SAM,
    Prevent_Anon_SAM_Accounts,
    Prevent_Group_Policy_Refresh,
    Config_Classic_Security_Model,
    Disable_File_Sharing,
    Disable_RDP,
    RDP_Max_Security,
    Enable_Firewall,
    Remove_Enable_LMhosts,
    Block_All_Ports,
    Disable_ICMP_IPV4,
    Disable_ICMP_IPV6,
    Disable_Sending_Pass_SMB,
    Restrict_Shares_Access,
    Allow_Only_LMA,
    Disable_Lan_Hash_Value,
    Network_Digitally_Sign_Communications,
    Prevent_Printing_Over_Http,
    Prevent_Remote_Assistance,
    NTFS_Update_Disable,
    Machine_Inactivity_15_Min,
    IPSec_Exemptions_Limited,
    WinExplorer_Heap_Corruption_Disable,
    Remote_Logfiles_Generate,
    SubSystem_Require_Case_Insensitivity,
    Safe_DLL_Search_Mode
} = require('./security'); 

const config = {
    security: true,
    sysInfo: true
}

let mainDir = `${__dirname}\\loot`
if (!fs.existsSync(mainDir)){
    fs.mkdirSync(mainDir);
};
let LootDir = `${mainDir}\\${os.hostname()}_${os.platform()}`;
if (!fs.existsSync(LootDir)){
    fs.mkdirSync(LootDir);
};
console.log(banner);

if(config.sysInfo){
    ListInstalledApps(LootDir);
    SeeStartupApps(LootDir);
    ArpTable(LootDir);
    GetWifiPasswords(LootDir);
    GetFirewallConfig(LootDir);
    GetnetworkShares(LootDir);
    SearchRegistryForPassword(LootDir);
    ListUsers(LootDir);
    ListCurrentConnections(LootDir);
    GetRunningProcesses(LootDir);
    GetSystemInfo(LootDir);
}


if(config.security){
    Disable_NULL_Session(LootDir);
    Disable_The_Guest_Account(LootDir);
    Restrict_Permission_Anon_User(LootDir);
    Require_Keys_For_Login(LootDir);
    Disallow_Anon_Enum_Of_SAM(LootDir);
    Prevent_Anon_SAM_Accounts(LootDir);
    Prevent_Group_Policy_Refresh(LootDir);
    Config_Classic_Security_Model(LootDir);
    Disable_File_Sharing(LootDir);
    Disable_RDP(LootDir);
    RDP_Max_Security(LootDir);
    Enable_Firewall(LootDir);
    Remove_Enable_LMhosts(LootDir);
    Block_All_Ports(LootDir);
    Disable_ICMP_IPV4(LootDir);
    Disable_ICMP_IPV6(LootDir);
    Disable_Sending_Pass_SMB(LootDir);
    // Restrict_Shares_Access(LootDir);
    Allow_Only_LMA(LootDir);
    Disable_Lan_Hash_Value(LootDir);
    Network_Digitally_Sign_Communications(LootDir);
    Prevent_Printing_Over_Http(LootDir);
    Prevent_Remote_Assistance(LootDir);
    NTFS_Update_Disable(LootDir);
    Machine_Inactivity_15_Min(LootDir);
    IPSec_Exemptions_Limited(LootDir);
    WinExplorer_Heap_Corruption_Disable(LootDir);
    Remote_Logfiles_Generate(LootDir);
    SubSystem_Require_Case_Insensitivity(LootDir);
    Safe_DLL_Search_Mode(LootDir);
}