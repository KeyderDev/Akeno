module.exports = ({
    name: 'buy-incubadora',
    code: `
    
    $title[Haz comprado una incubadora!]
    $description[Haz comprado una incubadora! Con esto podras incubar huevos de animales]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una incubadora >w<!]
    $setUserVar[Money;$sub[$getUserVar[Money];2000]]
    $setUserVar[incubadora;$sum[$getUserVar[incubadora;$authorID];1];$authorID]
    $onlyIf[2000<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})