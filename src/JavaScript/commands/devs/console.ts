module.exports = {
    name: "console",
    code: `
    \`\`\`
    Akeno's Console v1.0.0 | $username[$clientID] v1.7.1 Beta

    C:/Akeno: $message\`\`\`
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



$else
$endif
    `
}