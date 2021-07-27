module.exports = ({
    name: 'buy-cookie',
    code: `
    
    $title[Haz comprado una galletita!]
    $description[Haz comprado una galleta! Comete la galleta o te mato >:v]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una galleta >W<!]
    $setUserVar[Money;$sub[$getUserVar[Money];900]]
    $setUserVar[cookies;$sum[$getUserVar[cookies;$authorID];1];$authorID]
    $onlyIf[900<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})