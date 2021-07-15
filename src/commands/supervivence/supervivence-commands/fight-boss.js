module.exports = ({
    name: "fight-boss",
    code: `$title[⚔️ Batalla contra Jefe]$description[
        Haz vencido a un jefe! Pero haz perdido $random[1;2] corazones de vida

        Recompensas:
        x$random[1;2] Ficha de naturaleza]
        $color[BLUE]
        $setUserVar[naturetoken;$sum[$getUserVar[naturetoken;$authorID];$random[1;2]];$authorID]
        $setUserVar[characterlife;$sub[$getUserVar[characterlife;$authorID];$random[1;2]];$authorID]
        $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
            :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})