module.exports = ({
name: "invite-tracker",
aliases:["invitetracker","inv-tracker","invtracker","invtrack"],
code: `
$if[$message[1]==on]
$title[Sistema de Invite tracker]$description[
El sistema de invite tracker a sido encendido correctamente por <@$authorID>]
$color[D1BBBB]
$setServerVar[invitetracker;on]

$elseif[$message[1]==off]
$title[Sistema de Invite tracker]$description[El sistema de invite tracker a sido apagado correctamente por <@$authorID>]
$color[D1BBBB]
$setServerVar[invitetracker;off]
$endelseif
$endif
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})