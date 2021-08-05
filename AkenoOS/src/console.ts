module.exports = {
    name: "console",
    code: `
    \`\`\`
    Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta
    Port: $getGlobalUserVar[console_port]
    Idiom: $getGlobalUserVar[console_lang]
    
    C:/Akeno: $message\`\`\`
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $if[$message==$ serverowner]
    $editIn[1s;
    \`\`\`
    Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

    C:/Akeno: $userTag[$ownerID]
    \`\`\`]
    

$elseIf[$message==$ akeno premium]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $getGlobalUserVar[PREMIUMgeneral]
\`\`\`]
$endelseif

$elseIf[$message==$ commands]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno:
$ akeno premium
$ serverowner
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
Todos los comandos que vaya a poner debe ponerlos en minusculas
Para ejecutar un comando, use $getServerVar[prefix]console $ <comando>
\`\`\`]
$endelseif

$elseIf[$message==$ myid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $authorID
\`\`\`]
$endelseif

$elseIf[$message==$ client token]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: Access Denied
\`\`\`]
$endelseif

$elseIf[$message==$ serverownerid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $ownerID
\`\`\`]
$endelseif

$elseIf[$message==$ guildid]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $guildID
\`\`\`]
$endelseif

$elseIf[$message==$ cpu usage]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: %$cpu/100% 
\`\`\`]
$endelseif

$elseIf[$message==$ cpu model]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $djsEval[require ('os').cpus()[0].model;yes]
\`\`\`]
$endelseif

$elseIf[$message==$ servers akeno]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $serverCount
\`\`\`]
$endelseif

$elseIf[$message==$ uptime]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $client[readytimestamp]
\`\`\`]
$endelseif

$elseif[$message==$ client id]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $clientID
\`\`\`]
$endelseif

$elseIf[$message==$ total ping]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $sum[$ping;$botping;$dbping] ms
\`\`\`]
$endelseif

$elseIf[$message==$ kill client]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta
 
C:/Akeno: Access Denied
\`\`\`]
$endelseIf

$elseIf[$message==$ ram usage]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
\`\`\`]
$endelseif

$elseIf[$message==$ servers users]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $allMembersCount
\`\`\`]
$endelseif

$elseIf[$message==$ node version]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $nodeVersion
\`\`\`]
$endelseif

$elseIf[$message==$ libraries]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: Aoi.js | dbd.ts
\`\`\`]
$endelseif

$elseIf[$message==$ package version]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: Aoi.js v$packageVersion
\`\`\`]
$endelseif

$elseIf[$message==$ change port]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: Done
\`\`\`]
$setGlobalUserVar[console_port;$random[1;2;no]$random[2;3;no]$random[3;4;no]$random[4;5;no]]
$endelseif

$elseIf[$message==$ logs]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: $readFile[./data.txt]
\`\`\`]
$endelseif

$elseIf[$message==$ reset port]
$editIn[1s;
\`\`\`
Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

C:/Akeno: Done
\`\`\`]
$setGlobalUserVar[console_port;1000;$authorID]
$endelseif



$else
$endif
    `
}