module.exports = [{
    name: "cancel-premium",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;✅,❌;si,no;yes]
    
    $textSplit[$sendMessage[{title:?}{description:
        Esta usted seguro que desea cancelar su subscripcion Premium? Esta accion es inrreversible
        Reaccione a :white_check_mark: para cancelar su subscripcion Premium
        Reaccione a :x: para cancelar}{color:YELLOW};yes]; ]
        $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado en tu cuenta para usar este comando]
        $onlyIf[$getGlobalUserVar[PREMIUM]!=false;:x:| Necesitas tener premium para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{//categoría de configuración
    name: "si",
    code: `$editMessage[$message[1];{color:GREEN}{title:Premium Cancelado}{description:
    Su subscripcion Premium fue cancelada correctamente}]
    $takeRoles[$authorID;843920390522929202]
    $setGlobalUserVar[PREMIUM;false;$authorID]
    $setGlobalUserVar[premiumbadge;;$authorID]`,
    type:'awaitedCommand'
    },{
    name: "no",
    code: `$editMessage[$message[1];{color:D1BBBB}{title:Proceso Cancelado}{description:Se ha cancelado el proceso}]`,
type:'awaitedCommand'
}]