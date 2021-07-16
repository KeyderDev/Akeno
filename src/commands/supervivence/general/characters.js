module.exports = ({
    name: "characters",
    code: `$title[Personajes de Supervivencia]$description[
        **Personajes:**
        Maria - Fan de la naturaleza
        Pedro - Experiencia en supervivencia
        Josue - Miedoso
        Carlos - Tiene problemas de panza
        Jonathan - El gamer B)
    *Use $getServerVar[prefix]select(personaje) para seleccionar su personaje*]
    $color[BLUE]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})