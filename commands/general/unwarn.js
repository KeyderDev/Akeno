module.exports = {

name: "removewarn",
aliases: ['unwarn','resetwarns','removewarns','unwarns'],
code: `
$color[RANDOM]
$title[Se ha removido una advertencia de <@$findMember[$message[1]]]
$description[**<@$authorID>** removio una advertencia de **$findMember[$message[1]]** 
Ahora el usuario tiene \`$getUserVar[warn;$findMember[$message]]\` advertencias]
$channelSendMessage[$getServerVar[LogsChannel];{title: Advertencia Removida}{description:
**Advetencia removida**
Administrador: <@$authorID>
Usuario: <@$findMember[$message[1]]}{color:GREEN}]
$setUserVar[warn;$sub[$getUserVar[warn;$findMember[$message]];1];$findMember[$message]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findMember[$message[1]];**:x:| Para realizar esta accion mi rol tiene que estar encima de los demas**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ El usuario tiene el mismo alto de rol que tu**]
$onlyIf[$getUserVar[warn;$findMember[$message]]>0:x:| **El usuario ahora tiene 0 advertencias**]
$onlyIf[0<=$getUserVar[warn;$findMember[$message[1]];:x: | El usuario no tiene advertencias!]
$onlyIf[$message[1]!=$authorID;**:x:| No te puedes quitar una advertencia a ti mismo**]
$onlyIf[$message[1]!=;**:x:| **Necesitas mencionar a alguien**, Uso:
\`$getServerVar[prefix]unwarn <@usuario>\`]
$onlyPerms[manageroles;⛔ **Necesitas el permiso de manejar roles para usar este comando**]
$onlyBotPerms[manageroles;⛔ **Necesito el permiso de manejar roles para usar este comando ]
**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`

}
