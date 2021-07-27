module.exports = ({
    name: 'buy-cpu',
    code: `
    
    $title[Haz comprado un procesador Intel core i7]
    $description[Con este componente podras armar una pc]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar un procesador!]
    $setUserVar[Money;$sub[$getUserVar[Money];800]]
    $setUserVar[cpu;$sum[$getUserVar[cpu;$authorID];1];$authorID]
    $onlyIf[800<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})