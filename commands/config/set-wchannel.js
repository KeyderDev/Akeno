module.exports = ({
name: "set-wchannel",
code: `


$title[Nuevo canal de registro]
$description[Se selecciono <#$mentionedChannels[1]> como canal de bienvenida]
$footer[Solicitado por $username | $month | $day | $hour:$minute]
$color[D1BBBB]
$setServerVar[wchannel;$mentionedChannels[1]]
$onlyPerms[admin;:x:| Necesitas el permiso de ADMINISTRADOR para usar este comando]
$argsCheck[>0;Menciona un canal!]
$onlyIf[$mentionedChannels[1]!=;Menciona el canal de bienvenida]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]]`
})