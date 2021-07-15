module.exports = ({
    name: "select-maria",
    code: `$title[Personaje Seleccionado]$description[
        Haz elegido a **Maria** como personaje inicial
    ]
    $color[BLUE]
    $setUserVar[naturetoken;1]
    $setUserVar[character;maria]
    $onlyIf[$getUserVar[character]==0;:x: | Ya tienes un personaje!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})