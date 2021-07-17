module.exports = ({
    name: "build-bunker",
    code: `$title[Bunker Construdo]#description[
        Haz construido un bunker nuclear! Aqui puedes encontrar mas suministros, como latas de comida, radio etc]
        $color[BLUE] 
        $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
            :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})