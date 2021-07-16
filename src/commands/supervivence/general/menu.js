module.exports [{
    name: "menu",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;☠️,🌜,📜,🗺️;comandos,stats,materiales,mapa]
    $textSplit[$sendMessage[{title: Menu de supervivencia}{description:
    Comandos:
    Estadisticas del jugador:
    Materiales:}]]`
},{
    name: "comandos",
    code: `$editMessage[$message[1];{title:Comandos de Supervivencia}{description:
    - $getServerVar[prefix]fight-boss
    - $getServerVar[prefix]characters
    - $getServerVar[prefix]cure-character
    - $getServerVar[prefix]farm
    - $getServerVar[prefix]restore-energy}{color:BLUE}]`,
    type:'awaitedCommmand'
},{
    name: "stats",
    code: `$editMessage[$message[1];{title:Estadisticas del Jugador}
    :heart:Vida restante: $getUserVar[characterlife]
    :zap:Energia: $getUserVar[energy]
    {color:BLUE}]`,
    type:'awaitedCommand'
},{
    name: "materiales",
    code: `$editMessage[$message[1];{title:Materiales}{description:
    Concreto: $getUserVar[concreto]
    Ladrillos: $getUserVar[ladrillo]
    :adhesive_bandage:Vendas: $getUserVar[vendas]
    :rock:Rocas: $getUserVar[roca]}{color:BLUE}]`,
},{
    name: "mapa",
    code: `$editMessage[$message[1];{title:Mapa}{description:
    
    :moon: Moon Island: :skull: Derrota 10 jefes $getUserVar[defeatedbosses]/10}
    {color:BLUE}]
    $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
        $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]`,
    type:'awaitedCommand'

}]