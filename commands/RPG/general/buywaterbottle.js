module.exports = ({
    name: 'buy-waterbottle',
    code: `
    
    $title[Haz comprado una botella de agua!]
    $description[Haz comprado una botella de agua!
    Con esto podras alimentar a tus animales y regar tus plantas!]
    $color[ffff]
    $cooldown[10s; Espera %time% para volver a comprar una botella de agua >w<!]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[botella;$sum[$getUserVar[botella;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!] 
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})