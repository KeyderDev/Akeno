module.exports = ({
    name: 'buy-discoduro',
    code: `
    
    $title[Haz comprado un disco duro de 500GB!]
    $description[Haz comprado un disco duro samsung de 500GB]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un disco duro!]
    $setUserVar[Money;$sub[$getUserVar[Money];600]]
    $setUserVar[discoduro;$sum[$getUserVar[discoduro;$authorID];1];$authorID]
    $onlyIf[600<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]




`

})