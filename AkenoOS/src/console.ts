module.exports = {
    name: "console",
    code: `
    \`\`\`ini
    Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta        
    Port: $getGlobalUserVar[console_port]         Processes: $getVar[processes]
    Idiom: $getGlobalUserVar[console_lang]
    Disk: $getGlobalUserVar[directory_disk]
    
    $getGlobalUserVar[directory] [$message]\`\`\`
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $if[$message==$ serverowner]
    $editIn[1s;
    \`\`\`
    Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

    $getGlobalUserVar[directory] $userTag[$ownerID]
    \`\`\`]
    $onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
    $onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
    $onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]


$elseIf[$message==$ akeno premium]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $getGlobalUserVar[PREMIUMgeneral]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ commands]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory]
$ akeno premium       $ akenoOS 
$ serverowner         $ cache - Disco E:/
$ myid
$ serverownerid
$ client token
$ guildid
$ cpu usage
$ cpu model
$ servers akeno
$ uptime
$ client id
$ total ping
$ kill client
$ ram usage 
$ servers users
$ node version
$ libraries
$ package version
$ change port
$ reset port
$ logs
$ test
$ cd C:/ D:/ E:/
Todos los comandos que vaya a poner debe ponerlos en minusculas
Para ejecutar un comando, use $getServerVar[prefix]console $ <comando>
\`\`\`]
$endelseif

$elseIf[$message==$ myid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $authorID
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ client token]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Access Denied
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ serverownerid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $ownerID
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ guildid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $guildID
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ cpu usage]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] %$cpu/100% 
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ cpu model]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $djsEval[require ('os').cpus()[0].model;yes]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ servers akeno]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $serverCount
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ uptime]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $client[readytimestamp]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseif[$message==$ client id]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $clientID
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ total ping]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $sum[$ping;$botping;$dbping] ms
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ kill client]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta
 
$getGlobalUserVar[directory] Access Denied
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseIf

$elseIf[$message==$ ram usage]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ servers users]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $allMembersCount
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ node version]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $nodeVersion
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ libraries]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Aoi.js | dbd.ts
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ package version]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Aoi.js v$packageVersion
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ change port]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUserVar[console_port;$random[1;2;no]$random[2;3;no]$random[3;4;no]$random[4;5;no]]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ logs]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $readFile[./data.txt]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ reset port]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUserVar[console_port;1000;$authorID]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ test]
$editIn[1s;
\`\`\`diff
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] This is a testing command
+ test
- test
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ cd D:/]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUserVar[directory;D:/Akeno:;$authorID]
$setGlobalUserVar[directory_disk;D:/]
$endelseif

$elseIf[$message==$ cd C:/]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUSerVar[directory;C:/Akeno:;$authorID]
$setGlobalUserVar[directory_disk;C:/;$authorID]
$endelseif

$elseIf[$message==$ akenoOS]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $getVar[akenoOS_version]
\`\`\`]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]
$onlyIf[E:/Akeno/Cache:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "akeno" del disco C:/]

$endelseif

$elseIf[$message==$ cd E:/]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUSerVar[directory;E:/Akeno:;$authorID]
$setGlobalUserVar[directory_disk;E:/;$authorID]
$endelseif

$elseIf[$message==$ cd cache]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] Done
\`\`\`]
$setGlobalUserVar[directory;E:/Akeno/Cache:]
$onlyIf[C:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "cache" del disco E:/]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "cache" del disco E:/]
$endelseif

$elseIf[$message==$ cache]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

$getGlobalUserVar[directory] $readFile[./AkenoOS/cacheL1.txt]
\`\`\`]
$setGlobalUserVar[directory;E:/Akeno/Cache:]
$onlyIf[C:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "cache" del disco E:/]
$onlyIf[D:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "cache" del disco D:/]
$onlyIf[E:/Akeno:!=$getGlobalUserVar[directory];:x:| Este comando solo se puede utilizar en la carpeta "cache" del disco E:/]

$endelseif



$else
$endif
    `
}