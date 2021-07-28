module.exports = [{
    name: "antibots-on",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Bots Activado
    $setServerVar[antibots;true]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{
    name: "antibots-off",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Bots Desactivado
    $setServerVar[antibots;false]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    }]