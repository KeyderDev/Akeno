module.exports = [{
    name: "menu",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;☠️,🌜,📜,🗺️;comandos,stats,materiales,mapa;yes]
    $textSplit[$sendMessage[{title: Menu de supervivencia}{description:
    Comandos: ☠️
    Estadisticas del jugador: 🌜
    Materiales: 📜
    Mapa: 🗺️  }{color:BLUE};yes]; ]
    $onlyIf[$getUserVar[character]!=;:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    name: "comandos",
    code: `$editMessage[$message[1];{title:Comandos de Supervivencia}{description:
    - $getServerVar[prefix]fight-boss
    - $getServerVar[prefix]characters
    - $getServerVar[prefix]cure-character
    - $getServerVar[prefix]farm
    - $getServerVar[prefix]restore-energy
    - $getServerVar[prefix]build-bunker
    - $getServerVar[prefix]explore-bunker}{color:BLUE}]
    $onlyIf[$getUserVar[character]!=;:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
    type:'awaitedCommmand'
},{
    name: "stats",
    code: `$editMessage[$message[1];{title:Estadisticas del Jugador}{description:
    :heart:Vida restante: $getUserVar[characterlife]
    :zap:Energia: $getUserVar[energy]
    Bunker Nuclear: $getUserVar[bunkernuclear]}
    {color:BLUE}]
    $onlyIf[$getUserVar[character]!=;:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
    type:'awaitedCommand'
},{
    name: "materiales",
    code: `$editMessage[$message[1];{title:Materiales}{description:
    Concreto: $getUserVar[concreto]
    Ladrillos: $getUserVar[ladrillo]
    :adhesive_bandage:Vendas: $getUserVar[vendas]
    :rock:Rocas: $getUserVar[roca]
    Scoins: $getUserVar[scoins]
    Radio: $getUserVar[radio]
    Agua: $getUserVar[agua]
    Latas de ravioli: $getUserVar[ravioli]}{color:BLUE}]
    $onlyIf[$getUserVar[character]!=;:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    name: "mapa",
    code: `$editMessage[$message[1];{title:Mapa}{description:
    
    :crescent_moon: Moon Island: :skull: Derrota 10 jefes $getUserVar[defeatedbosses]/10}
    {color:BLUE}]
    $onlyIf[$getUserVar[character]!=;:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
        $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]`,
    type:'awaitedCommand'

}]