module.exports = ({
name: "cooldown",
code: `$dm$color[D1BBBB]$title[Comandos de cooldown]$description[
Con estos comandos podras setear el cooldown de algunos comandos
Uso: $getServerVar[prefix]set-(nombre del comando)cooldown (El tiempo, 1s, 2m, 3h, 4d etc)

$getServerVar[prefix]set-minecooldown
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]

$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`



})