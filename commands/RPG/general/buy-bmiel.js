module.exports = ({
    name: 'buy-bmiel',
    code: `
    $title[Haz comprado una botella de miel]
    $description[Miel de abeja recien extraida, pero no es cualquier miel...]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar miel]
    $setUserVar[Money;$sub[$getUserVar[Money];250]]
    $setUserVar[botellademiel;$sum[$getUserVar[botellademiel;$authorID];1];$authorID]
    $onlyIf[250<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})