module.exports = {
    name: "desactivate-logs",
    code: `$title[Logs Desactivados]$description[Los logs fueron desactivados correctamente]
    $color[GREEN]
    $setServerVar[LogsChannel;]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}