module.exports = ({
    name: 'buy-incubadora.p',
    code: `
    
    $title[Haz comprado una incubadora potenciada]
    $description[Haz comprado una incubadora potenciada! Con esto podras incubar animales exoticos y legendarios]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una incubadora potenciada!]
    $setUserVar[Money;$sub[$getUserVar[Money];8000]]
    $setUserVar[incubadorap;$sum[$getUserVar[incubadorap;$authorID];1];$authorID]
    $onlyIf[8000<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})