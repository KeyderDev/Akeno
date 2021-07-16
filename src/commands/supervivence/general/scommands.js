module.exports = ({
    name: "scommands",
    code: `$title[Comandos de supervivencia]$description[
        $getServerVar[prefix]fight-boss
        $getServerVar[prefix]cure
        $getServerVar[prefix]select(personaje)
        $getServerVar[prefix]s-shop
    ]$color[BLUE]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})