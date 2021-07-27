module.exports = ({
name: "download-vsc",
code: `$title[Haz descargado Visual Studio Code]$description[
Haz descargado el editor de codigo Visual Studio Code]
$color[ffff]
$setUserVar[vsc;$sum[$getUserVar[vsc;$authorID];1];$authorID]
$onlyIf[$getUserVar[vsc]==0;:x: | No puedes comprar dos veces el mismo programa!]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})