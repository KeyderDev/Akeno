module.exports = ({
    name: 'buy-zanahoria',
    code: `
    
    $title[Haz comprado una     zanahoria]
    $description[Haz comprado una zanahoria! Con la zanahoria podras hacer hechizos y cocinar]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a comprar una zanahoria!]
    $setUserVar[Money;$sub[$getUserVar[Money];400]]
    $setUserVar[zanahoria;$sum[$getUserVar[zanahoria;$authorID];1];$authorID]
    $onlyIf[400<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})