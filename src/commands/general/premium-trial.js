module.exports = [{
    name: "premium-trial",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;✅,❌;si,no;yes]
    
    $textSplit[$sendMessage[{title:?}{description:
        Esta usted seguro que desea iniciar su prueba gratuita de Premium?
        Reaccione a :white_check_mark: para iniciar su prueba gratuita
        Reaccione a :x: para cancelar
        Duracion: 7 dias}{color:GREEN};yes]; ]
        $onlyIf[$getGlobalUserVar[PREMIUM]!=true;:x:| Ya eres un usuario Premium!]
        $onlyIf[$getGlobalUserVar[premiumbefore]!=true;:x:| Esta prueba gratuita solo se puede usar una vez]
        $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado en tu cuenta para usar este comando]
        
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{//categoría de configuración
    name: "si",
    code: `$editMessage[$message[1];{color:GREEN}{title:Premium Iniciado}{description:
    Su prueba gratuita de Premium a sido iniciada correctamente}]
    $setTimeout[5s;
        author: $authorID]
    $setGlobalUserVar[premiumbefore;true]
    $giveRoles[$authorID;843920390522929202]
    $setGlobalUserVar[PREMIUM;true;$authorID]
    $setGlobalUserVar[premiumbadge;<:premium:848928734254071808>;$findUser[$message[1]]]`,
    type:'awaitedCommand'
    },{
    name: "no",
    code: `$editMessage[$message[1];{color:D1BBBB}{title:Proceso Cancelado}{description:Se ha cancelado el proceso}]`,
type:'awaitedCommand'
}]