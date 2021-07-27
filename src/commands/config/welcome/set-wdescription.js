module.exports = {
    name: "set-wdescription",
    code: `$title[Descripcion de bienvenida seteada]
    $description[Se ha seteado la descripcion de bienvenida correctamente]
    $color[GREEN]
    $setServerVar[wdescription;$message[1]]
    $setServerVar[wactivated;true]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}