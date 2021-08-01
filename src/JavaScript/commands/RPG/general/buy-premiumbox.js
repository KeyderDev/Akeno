module.exports = ({
    name: 'buy-premiumbox',
    code: `
    
    $title[Haz comprado una Premium Box]
    $description[Usa $getServerVar[prefix]open-premiumbox para abrir la caja]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una Premium Box!]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[premiumbox;$sum[$getUserVar[premiumbox;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]==true;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})