function setConfig(){try{CLI.cli["--seturl"]&&(CONFIG.url=CLI.cli["--seturl"].argument[0]),fs.writeFileSync(CONFIGFILE,JSON.stringify(CONFIG))}catch(e){console.log(e)}readConfig(),showConfig("[*] New Config :")}module.exports=setConfig;