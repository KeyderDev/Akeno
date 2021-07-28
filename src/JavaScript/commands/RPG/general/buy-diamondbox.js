module.exports = ({
    name: 'buy-diamondbox',
    code: `
    
    $title[Haz comprado una Gold Box]
    $description[Usa $getServerVar[prefix]open-diamond para abrir la caja]
    $color[33F3FF]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[diamondbox;$sum[$getUserVar[diamondbox;$authorID];1];$authorID]
    $cooldown[10s; Espera %time% para volver a comprar una Diamond Box!]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})