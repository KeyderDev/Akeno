module.exports = ({
name: "warn",
aliases: "advertir",
code: `$title[Advertencia]
$description[<@$findMember[$message[1]]> fue advertido
Advertido: <@$findMember[$message[1]]>
Administrador: <@$authorID>
Razon: $messageSlice[1;40]
Advertencias en total: $sum[$getUserVar[warn;$findMember[$message[1]]];1]
$footer[Tienes que seguir las reglas!]
$color[ffff]
$channelSendMessage[$getServerVar[LogsChannel];{title:Usuario advertido}
{description:
Advertido: <@$findMember[$message[1]]>
Administrador: <@$authorID>
Razon: $messageSlice[1;40]
Advertencias en total:  $sum[$getUserVar[warn;$findMember[$message[1]]];1]}
{color:RED}]
$setUserVar[warn;$sum[$getUserVar[warn;$findMember[$message[1]]];1];$mentioned[1]]
$onlyIf[$message[1]!=;:x:| Necesitas mencionar o poner la ID de la persona que quieres advertir]
$onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]
$onlyIf[$authorID!=$findMember[$message[1]];:x:| No te puedes dar una advertencia a ti mismo]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})