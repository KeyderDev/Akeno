module.exports = ({
    name: 'buy-legg',
    code: `
    
    $title[Haz comprado un huevo de lobo!]
    $description[Haz comprado un huevo de lobo! Compra una incubadora para incubar el huevo]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un huevo de lobo!]
    $setUserVar[Money;$sub[$getUserVar[Money];1000]]
    $setUserVar[loboegg;$sum[$getUserVar[loboegg;$authorID];1];$authorID]
    $onlyIf[1000<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})