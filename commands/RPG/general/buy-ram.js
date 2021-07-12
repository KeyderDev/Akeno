module.exports = ({
    name: 'buy-ram',
    code: `
    
    $title[Haz comprado memoria ram de 8GB]
    $description[Componente de pc]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar memoria ram!]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[ram;$sum[$getUserVar[ram;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]




`

})