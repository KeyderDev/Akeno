module.exports = ({
    name: 'buy-cegg',
    code: `
    
    $title[Haz comprado un huevo de de conejo!]
    $description[Haz comprado un huevo de conejo! Compra una incubadora para incubar el huevo]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un huevo de conejo]
    $setUserVar[Money;$sub[$getUserVar[Money];1000]]
    $setUserVar[cegg;$sum[$getUserVar[cegg;$authorID];1];$authorID]
    $onlyIf[1000<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})