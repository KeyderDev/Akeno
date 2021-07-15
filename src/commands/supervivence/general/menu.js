module.exports [{
    name: "menu",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;☠️,🌜,📜;🗺️;comandos,stats,materiales,mapa]
    $textSplit[$sendMessage[{title: Menu de supervivencia}{description:
    Comandos:
    Estadisticas del jugador:
    Materiales:}]]`
},{
    name: "comandos",
    code: `$editMessage[$message[1];{title:Comandos de Supervivencia}{description:
    - $getServerVar[prefix]fight-boss
    }{color:BLUE}]`,
    type:'awaitedCommmand'
},{
    name: "stats",
    code: `$editMessage[$message[1];{title:Estadisticas del Jugador}
    Vida restante: $getUserVar[characterlife]
    {color:BLUE}]`,
    type:'awaitedCommand'
},{
    name: "materiales",
    code: `$editMessage[$message[1];{title:Materiales}{description:
    }{color:BLUE}]`,
},{
    name: "mapa",
    code: `$editMessage[$message[1];{title:Mapa}{description:
    
    :moon: Moon Island: :skull: Derrota 10 jefes $getUserVar[defeatedbosses]/10}
    {color:BLUE}]`,
    type:'awaitedCommand'

}]