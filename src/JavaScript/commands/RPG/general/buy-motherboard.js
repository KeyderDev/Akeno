module.exports = ({
    name: 'buy-motherboard',
    code: `
    
    $title[Haz comprado una placa base]
    $description[Con esto, sera un componente menos para armar tu pc]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una placa base!]
    $setUserVar[Money;$sub[$getUserVar[Money];600]]
    $setUserVar[motherboard;$sum[$getUserVar[motherboard;$authorID];1];$authorID]
    $onlyIf[600<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]




`

})