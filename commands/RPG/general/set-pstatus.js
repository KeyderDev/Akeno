module.exports = ({
name: "set-pstatus",
code: `$color[ffff]$title[Status Cambiado]$description[
El status a sido cambiado correctamente]
$setGlobalUserVar[pstatus;$message[1]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})