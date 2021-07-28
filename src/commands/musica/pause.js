module.exports = ({
    name: "pause",
    code: `
$setServerVar[pause;true]
$color[D1BBBB]$title[Cancion pausada]$description[La cancion que se estaba reproduciendo a sido pausada por $username]$pauseSong
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})