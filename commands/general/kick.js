module.exports = ({
name: "kick",
code: `$channelSendMessage[$channelID;$title[Usuario Kickeado]$description[
El usuario $message[1] fue kickeado
Administrador: <@$authorID>
Razon: $messageSlice[1]]
$color[D1BBBB]

$sendDM[$findMember[$message[1];no];{title:Kickeado}{description:
Fuiste kickeado de **$serverName**
Administrador: <@$authorID>
Razon: $messageSlice[1]}]
$kick[$findMember[$message[1];no]]
$suppressErrors[{title:Ha ocurrido un error!!}{description:No sabemos que ha ocurrido, por favor hable de esto en el [servidor de soporte](https#COLON#//discord.gg/xGE2npwNhA)}{color:#FFFFFE}]
$onlyIf[$authorID!=$findMember[$message[1];no];:x:| No te puedes expulsarte a ti mismo!]
$onlyIf[$findMember[$message[1];no]!=$ownerID;:x:| No puedo expulsar al propietario del servidor!]
$onlyIf[$findMember[$message[1];no]!=undefined;:x: | No se logro encontrar al usuario]
$onlyIf[$message!=;:x: | Menciona, nombra o ingrese la ID del usuario que quiere expulsar!]
$onlyPerms[kick;:x: | Requieres permisos de \`expulsar miembros\` para ejecutar esta accion]
$onlyBotPerms[kick;:x: | Requiero permisos de \`expulsar miembros\` para ejecutar esta accion]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})

/*
14 de jun: Editado por Pavez
*/