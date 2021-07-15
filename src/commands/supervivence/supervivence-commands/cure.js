module.exports = ({
    name: "cure-character",
    code: `$title[Personaje Curado]$descriptin[
        **$getUserVar[character]** fue curado, perdiste (Ficha de naturaleza x1)
    ]$color[D1BBB]
    $resetUserVar[characterlife]
    $setUserVar[naturetoken;$sub[$getUserVar[naturetoken;$authorID];1];$authorID]
    $cooldown[5m;:x:| Hey! Espera **%time%** para curar a **$getUserVar[character]]
    $onlyIf[1<=$getUserVar[naturetoken];:x: | Necesitas (Ficha de naturaleza x1) para usar este comando!]
    $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getUserVar[character]==;:x: | Ya tienes un personaje!]
    $onlyIf[$getUserVar[characterlife]==;:x: | La vida de **$getUserVar[character]** esta completa, no se te quitaron fichas de naturaleza]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})