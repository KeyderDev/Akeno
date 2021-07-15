module.exports = ({
    name: "select-jonathan",
    code: `$title[Personaje Seleccionado]$description[
        Haz elegido a **Jonathan** como personaje inicial
    ]
    $color[BLUE]
    $setUserVar[gamingtoken;1]
    $setUserVar[character;jonathan]
    $onlyIf[$getUserVar[character]==0;:x: | Ya tienes un personaje!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})