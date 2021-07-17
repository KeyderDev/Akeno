module.exports = ({
    name: "explore-bunker",
    code: `$title[Bunker Explorado]$description[
        Decidiste investigar el bunker mas a fondo y encontraste:

        Radio x1
        Latas de ravioli x$random[1;2]
        Botellas de agua x$random[1;3]
    ]$color[BLUE]
    $setUserVar[radio;$sum[$getUserVar[radio;$authorID];1];$authorID]
    $setUserVar[sravioli;$sum[$getUserVar[sravioli;$authorID];$random[1;2]];$authorID]
    $setUserVar[sagua;$sum[$getUserVar[sagua;$authorID];$random[1;3]];$authorID]
    $setUserVar[bunkernuclear;$sub[$getUserVar[bunkernuclear;$authorID];1];$authorID]
    $onlyIf[10<=$getUserVar[energy];:x:| Vaya! Te haz quedado sin energia, usa $getServerVar[prefix]restore-energy para restaurarla!]
    $onlyIf[1<=$getUserVar[bunkernuclear];:x:| Necesitas tener un bunker nuclear para usar este comando]
    $onlyIf[!=$getUserVar[character];:x:| Necesitas tener un personaje para usar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})