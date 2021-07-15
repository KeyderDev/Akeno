module.exports = ({
    name: "sinv",
    code: `$title[Inventario de Supervivencia]$description[
        Personaje: $getUserVar[character]
        Ficha de naturaleza: $getUserVar[naturetoken]
        Ficha gamer: $getUserVar[gamertoken]
        Jefes Derrotados: $getUserVar[defeatedbosses]
        Vida del jugador: $getUserVar[characterlife]
    ]$color[BLUE]
    $onlyIf[<=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})