module.exports = ({
    name: "select-josue",
    code: `$title[Personaje Seleccionado]$description[
        Haz elegido a **Josue** como personaje inicial
    ]
    $color[BLUE]
    $setUserVar[character;josue]
    $onlyIf[$getUserVar[character]==1;:x: | Ya tienes un personaje!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})