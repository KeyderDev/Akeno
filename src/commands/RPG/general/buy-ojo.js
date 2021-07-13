module.exports = ({
    name: 'buy-ojo',
    code: `
    
    $title[Haz comprado un ojo de araña!]
    $description[Haz comprado un ojo de araña, con esto podras hacer hechizos]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un ojo de araña!]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[ojo;$sum[$getUserVar[ojo;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})