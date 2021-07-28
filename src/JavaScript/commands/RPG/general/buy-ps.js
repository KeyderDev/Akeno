module.exports = ({
    name: 'buy-ps',
    code: `
    
    $title[Haz comprado una fuente de poder]
    $description[Con este componente podras armar una pc]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una fuente de poder!]
    $setUserVar[Money;$sub[$getUserVar[Money];700]]
    $setUserVar[ps;$sum[$getUserVar[ps;$authorID];1];$authorID]
    $onlyIf[700<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})