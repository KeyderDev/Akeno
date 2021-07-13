module.exports = ({
    name: 'buy-server',
    code: `
    
    $title[Haz comprado un servidor]
    $description[Haz comprado un servidor para Hosting]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un servidor]
    $setUserVar[Money;$sub[$getUserVar[Money];800]]
    $setUserVar[servidor;$sum[$getUserVar[servidor;$authorID];1];$authorID]
    $onlyIf[800<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})