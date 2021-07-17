module.exports = ({
    name: "build-bunker",
    code: `$title[Bunker Construdo]$description[
        Haz construido un bunker nuclear! Aqui puedes encontrar mas suministros, como latas de comida, radio etc]
        
        $color[BLUE]
        $setUserVar[bunkernuclear;$sum[$getUserVar[bunkernuclear;$authorID];1];$authorID]
        $setUserVar[concreto;$sub[$getUserVar[concreto;$authorID];10];$authorID]
        $setUserVar[energy;$sub[$getUserVar[energy;$authorID];1];$authorID]
        $onlyIf[10<=$getUserVar[concreto];:x:| Necesitas (Cemento x10)]
        $onlyIf[10<=$getUserVar[energy];:x:| Vaya! Te haz quedado sin energia, usa $getServerVar[prefix]restore-energy para restaurarla!]
        $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!] 
        $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
            :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
            $cooldown[15m;:x:| Oye! Espera **%time%** para volver a construir un bunker nuclear]`
})