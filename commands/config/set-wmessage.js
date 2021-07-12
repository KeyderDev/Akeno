module.exports = ({
name: "set-wmessage",
code: `
$title[Mensaje establecido!]
$description[El mensaje se establecio a: $message]

$setServerVar[wmessage;$message]
$color[D1BBBB]
$footer[Solicitado por $username | $month | $day | $hour:$minute]
$onlyPerms[admin;:x:| Necesitas el permiso de ADMINISTRADOR para usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})