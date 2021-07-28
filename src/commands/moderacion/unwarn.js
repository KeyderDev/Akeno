module.exports = {

name: "removewarn",
aliases: ['unwarn','resetwarns','removewarns','unwarns'],
code: `
$color[GREEN]
$title[Se ha removido una advertencia de $userTag[$findMember[$message[1]]]]
$description[**<@$authorID>** removio una advertencia de **<@>** 
Ahora el usuario tiene \`$getUserVar[warn;$findMember[$message]]\` advertencias]
$channelSendMessage[$getServerVar[LogsChannel];{title: Advertencia Removida}{description:
**Advetencia removida**
Administrador: <@$authorID>
Usuario: <@$findMember[$message[1]]>}{color:GREEN}]
$setUserVar[warn;$sub[$getUserVar[warn;$findMember[$message]];1];$findMember[$message]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];**⛔ El usuario tiene el mismo alto de rol que tu**]
$onlyIf[$getUserVar[warn;$findMember[$message]]>0:x:| **El usuario ahora tiene 0 advertencias**]
$onlyIf[0<=$getUserVar[warn;$findMember[$message[1]];:x: | El usuario no tiene advertencias!]
$onlyIf[$message[1]!=$authorID;**:x:| No te puedes quitar una advertencia a ti mismo**]
$onlyIf[$message[1]!=;**:x:| **Necesitas mencionar a alguien**, Uso:
\`$getServerVar[prefix]unwarn <@usuario>\`]
$onlyPerms[manageserver;⛔ **Necesitas el permiso de manejar servidor para usar este comando**]
$onlyBotPerms[manageserver;⛔ **Necesito el permiso de manejar servidor para usar este comando ]
**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`

}
