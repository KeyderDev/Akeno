module.exports = ({
name: "set-minecooldown",
code: `$color[D1BBBB]$title[Cooldown cambiado]$description[
El cooldown del tiempo de mina a sido establecido a $message]
$setServerVar[minetime;$message]
$onlyIf[$isNumber[$message[1]]==true;:x:| El cooldown no puede ser una letra, deben ser numeros]
$onlyPerms[admin;:x:| Necesitas tener el permiso de \`Administrador\` para usar este comando]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]

$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`





})