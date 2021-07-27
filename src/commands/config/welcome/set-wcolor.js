module.exports = {
    name: "set-wcolor",
    code: `$title[Color de bienvenidas seteado]
    $description[El color de las bienvenidas fue seteado a $message[1]]
    $color[GREEN]
    $setServerVar[wcolor;$message[1]]
    $onlyIf[$checkContains[$message;#]!=true;:x:| El color de las bienvenidas es invalido]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}