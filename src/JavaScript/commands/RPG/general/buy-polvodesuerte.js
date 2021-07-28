module.exports = ({
    name: 'buy-polvodesuerte',
    code: `
    $title[Haz comprado un polvo de suerte]
    $description[Con esto podras hacer hechizos!]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar polvo de suerte]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[polvodesuerte;$sum[$getUserVar[polvodesuerte;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})