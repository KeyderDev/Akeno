module.exports = [{
    name: "antiusers-on",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Usuarios Activado
    $setServerVar[antiusers;true]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{
    name: "antiusers-off",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Usuarios Desactivado
    $setServerVar[antiusers;false]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    }]