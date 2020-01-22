const fs = require('fs');
let appendToFile = (data) => {
    // append data to file
    fs.appendFile(`${__dirname}/index.js`,`${data}\n`, 'utf8',
    // callback function
        function(err) { 
            if (err) throw err;
            // if no error
            console.log("Data is appended to file successfully.")
        }
    );
}

// To generate functions from modules.json file
    // Credit: GrapheneX by the way
fs.readFile('./modules.json', function(err,data){
    if(err){
        console.log(err);
    }
    let modules = JSON.parse(data.toString('utf8'));
    let firewallModules = modules.firewall;
    let userModules = modules.user;
    let networkModules = modules.network;
    let servicesModules = modules.services;
    let functionArray = [];
    // =========== USER ===========
    for(let index in userModules){
        let category = 'UserModules';
        let userModule = userModules[index];
        let template =  `
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let ${userModule.name} = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(\`${userModule.command}\`)` + `
            ps.invoke().then(output => {
                // console.log(output);
                console.log(\`${userModule.desc}\`);

                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = ${userModule.name}
        `;
        let mainDir = `${__dirname}\\${category}`
        if (!fs.existsSync(mainDir)){
            fs.mkdirSync(mainDir);
        };
        appendToFile(`const ${userModule.name} = require('${mainDir}/${userModule.name}');`)

        functionArray.push(userModule.name);
        fs.writeFile(`${__dirname}\\${category}\\${userModule.name}.js`, template,function(err){
            if(err){
                console.log(err);
            } else {
                console.log("Wrote File properly.")
            }
        })
        console.log(template);
    }
    // =========== FIREWALL ===========
    for(let index in firewallModules){
        let category = 'FirewallModules';
        let FirewallModule = firewallModules[index];
        let template =  `
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let ${FirewallModule.name} = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(\`${FirewallModule.command}\`)` + `
            ps.invoke().then(output => {
                console.log(\`${FirewallModule.desc}\`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = ${FirewallModule.name}
        `;
        let mainDir = `${__dirname}\\${category}`
        if (!fs.existsSync(mainDir)){
            fs.mkdirSync(mainDir);
        };
        appendToFile(`const ${FirewallModule.name} = require('${mainDir}/${FirewallModule.name}');`)

        functionArray.push(FirewallModule.name);

        fs.writeFile(`${__dirname}\\${category}\\${FirewallModule.name}.js`, template,function(err){
            if(err){
                console.log(err);
            } else {
                console.log("Wrote File properly.")
            }
        })
        console.log(template);
    }
    // =========== NETWORK ===========
    for(let index in networkModules){
        let category = 'NetworkModule';
        let NetworkModule = networkModules[index];
        let template =  `
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let ${NetworkModule.name} = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(\`${NetworkModule.command}\`)` + `
            ps.invoke().then(output => {
                // console.log(output);
                console.log(\`${NetworkModule.desc}\`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = ${NetworkModule.name}
        `;
        let mainDir = `${__dirname}\\${category}`;
        appendToFile(`const ${NetworkModule.name} = require('${mainDir}/${NetworkModule.name}');`)
        if (!fs.existsSync(mainDir)){
            fs.mkdirSync(mainDir);
        };
        functionArray.push(NetworkModule.name);

        fs.writeFile(`${__dirname}\\${category}\\${NetworkModule.name}.js`, template,function(err){
            if(err){
                console.log(err);
            } else {
                console.log("Wrote File properly.")
            }
        })
        console.log(template);
    }
    // =========== SERVICES ===========
    for(let index in servicesModules){
        let category = 'ServicesModules';
        let ServicesModule = servicesModules[index];
        let template =  `
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let ${ServicesModule.name} = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(\`${ServicesModule.command}\`)` + `
            ps.invoke().then(output => {
                console.log(\`${ServicesModule.desc}\`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = ${ServicesModule.name}
        `;
        let mainDir = `${__dirname}\\${category}`
        appendToFile(`const ${ServicesModule.name} = require('${mainDir}/${ServicesModule.name}');`)
        functionArray.push(ServicesModule.name);

        if (!fs.existsSync(mainDir)){
            fs.mkdirSync(mainDir);
        };
        fs.writeFile(`${__dirname}\\${category}\\${ServicesModule.name}.js`, template,function(err){
            if(err){
                console.log(err);
            } else {
                console.log("Wrote File properly.")
            }
        })
        console.log(template);
    }

    let exportString = `\nmodule.exports = {\n`
    for(let index in functionArray){
        let fn = functionArray[index];
        exportString+= `    ${fn},\n`
    }
    exportString+= '\n};'
    appendToFile(exportString)

})

