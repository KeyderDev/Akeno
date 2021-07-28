module.exports = {
    name: "set-botrole",
    code: `$title[Auto rol de bots seteado]
    $description[Se seteo el autorol para los bots a <@&$findRole[$message[1]]>]
    $color[GREEN]
    $setServerVar[botrole;$findRole[$message[1]]]
    $onlyIf[!=$message[1];:x:| Necesitas ingresar el autorol que se le dara a los bots]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}