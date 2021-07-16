module.exports = ({
    name: "restore-energy",
    code: `$title[Energia Restaurada]$description[
    La energia de **$getUserVar[character]** se ha restaurado completamente
    :zap:Energia: $getUserVar[energy]]$color[BLUE]
    $resetUserVar[energy]
    $cooldown[7m;:x:| Hey! Espera **%time%** para recargar energias!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
`
})