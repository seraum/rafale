#!/usr/bin/env node

global.VERSION="0.0.5",global.http=require("http"),global.https=require("https"),global.exec=require("child_process").exec,global.execSync=require("child_process").execSync,global.spawn=require("child_process").spawn,global.crypto=require("crypto"),global.fs=require("fs"),global.os=require("os"),global.path=require("path"),global.url=require("url"),global.tmp=os.tmpdir(),global.platform=os.platform(),global["byte"]=os.arch(),global.zip=require("./lib/zip.util.js"),global.uid=require("./lib/uid.util.js"),global.request=require("./lib/request.util.js"),global.file=require("./lib/file.util.js"),global.security=require("./lib/security.util.js"),global.cli=require("./lib/cli.util.js"),global.rmdir=require("./lib/rmdir.js"),global.Init=require("./config/init.js"),global.readConfig=require("./config/readconfig.js"),global.showConfig=require("./config/showconfig.js"),global.setConfig=require("./config/setconfig.js"),global.reinitConfig=require("./config/reinitconfig.js"),global.showVersion=require("./action/version.js"),global.Deploy=require("./action/deploy.js"),global.Help=require("./action/help.js"),global.Daemon=require("./action/daemon.js"),global.CONFIGPATH=os.homedir()+path.sep+".rafale",global.CONFIGFILE=CONFIGPATH+"/rafale.json",global.CONFIG={},Init(),readConfig(),global.CLI=cli(process.argv),global.URL=CONFIG.url,global.EXEC=!0,global.VALID_TARGET=["android-armv7","android-arm64","android-armv8","linux-armv7","linux-arm64","linux-armv8","linux-x86","linux-x64","macos-armv7","macos-arm64","macos-armv8","macos-x86","macos-x64","win-armv7","win-arm64","win-armv8","win-x86","win-x64"];var ACTION="list";switch(CLI.cli["--help"]||CLI.cli["-h"]?ACTION="help":CLI.cli["--daemon"]?ACTION="daemon":CLI.cli["--list"]?ACTION="list":CLI.cli["--version"]||CLI.cli["-v"]?ACTION="version":CLI.cli["--seturl"]?ACTION="setconfig":CLI.cli["--deploy"]?ACTION="deploy":CLI.cli["--config"]?ACTION="showconfig":CLI.cli["--reinit"]&&(ACTION="reinitconfig"),ACTION){case"daemon":Daemon();break;case"deploy":Deploy();break;case"version":showVersion();break;case"help":Help();break;case"List":List();break;case"setconfig":setConfig();break;case"showconfig":showConfig();break;case"reinitconfig":reinitConfig();break;default:Help()}
