module.exports = ({
    name: 'buy-lppan',
    code: `
    $title[Haz comprado una libra de pan!]
    $description[Con esto podras comerciar y cocinar productos!]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una libra de pan >W<!]
    $setUserVar[Money;$sub[$getUserVar[Money];600]]
    $setUserVar[lppan;$sum[$getUserVar[lppan;$authorID];1];$authorID]
    $onlyIf[600<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})