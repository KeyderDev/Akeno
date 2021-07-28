module.exports = {
    name: "set-wchannel",
    code: `$title[Canal de bienvenidas seteado]
    $description[El canal de bienvenidas fue seteado a <#$findChannel[$message[1]]>]
    $color[GREEN]
    $setServerVar[wchannel;$findChannel[$message[1]]]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}