module.exports = [{
    name: "antimalicious-on",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Maliciosos Activado
    $setServerVar[antimalicious;true]
    $onlyForServers[830472834286878730;:x:| Este comando solo puede ser utilizado en $serverName[830472834286878730]]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{
    name: "antimalicious-off",
    code: `<a:checkanimado:831161301282979911>| Sistema de Anti Maliciosos Desactivado
    $setServerVar[antimalicious;false]
    $onlyForServers[830472834286878730;:x:| Este comando solo puede ser utilizado en $serverName[830472834286878730]]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    }]