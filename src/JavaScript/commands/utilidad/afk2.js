module.exports = {
name:"afk",
aliases:["set-afk","setafk"],
usage:"afk {In server/global (required)} {reason (optional)}", 
code:`
$if[$message[1]==global]
    
$setGlobalUserVar[afks;$serverName[$guildID];$authorId]
$setGlobalUserVar[afkt;1]
$setGlobalUserVar[afk;yes]
$setGlobalUserVar[afkr;$messageSlice[1]]
$setGlobalUserVar[afkh;$hour:$minute
$timezone[America/Buenos_Aires]]
$changeNickname[$authorID;⟨AFK⟩ $username]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]


$else

$setUserVar[afk;yes]
$setUserVar[afkt;1]
$setUserVar[afkr;$message]
$setUserVar[afkh;$dateStamp]
$title[$userTag[$authorID] esta afk]
$description[Razon: $message]
$footer[Tipo: local;$authorAvatar]
$color[FF0000]
$endif

`}