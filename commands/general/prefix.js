module.exports = ({
name: "<@831280478190436423> prefix",
nonPrefixed: true
code: `$color[5865F2]$title[Prefix]$description[
Mi prefix en este servidor es $getServerVar[prefix]
Mi prefix por defecto es ak.
Para ver mis comandos, usa $getServerVar[prefix]help
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})