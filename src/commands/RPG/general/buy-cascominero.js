module.exports = ({
    name: 'buy-cascominero',
    code: `
    $title[Haz comprado un casco]
    $description[Este casco minero te servira para poder minar]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un casco minero]
    $setUserVar[Money;$sub[$getUserVar[Money];300]]
    $setUserVar[cascominero;$sum[$getUserVar[cascominero;$authorID];1];$authorID]
    $onlyIf[300<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})