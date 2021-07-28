module.exports = ({
name: "download-pterodactyl",
code: `$title[Haz descargado Pterodactyl]$description[
Haz descargado el servicio de Hosting en tu pc]
$color[ffff]
$setUserVar[pterodactyl;$sum[$getUserVar[pterodactyl;$authorID];1];$authorID]
$onlyIf[$getUserVar[pterodactyl]>1;:x: | No puedes comprar dos veces el mismo programa!]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})