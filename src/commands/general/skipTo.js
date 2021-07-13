module.exports = ({
name: "skipTo",
code: `
$title[Cancion salteada]
$description[Ahora reproduciendo la cancion **$message**]
$skipTo[$message]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`})