module.exports = ({
    name: "cure-character",
    code: `$title[Personaje Curado]$descriptin[
        **$getUserVar[character]** fue curado, perdiste (Ficha de naturaleza x1)
    ]$color[D1BBB]
    $resetUserVar[characterlife]
    $setUserVar[vendas;$sub[$getUserVar[vendas;$authorID];2];$authorID]
    $cooldown[5m;:x:| Hey! Espera **%time%** para curar a **$getUserVar[character]]
    $onlyIf[$getUserVar[characterlife]>10;:x: | La vida de **$getUserVar[character]** esta completa, no se te quitaron fichas de naturaleza]
    $onlyIf[2<=$getUserVar[vendas];:x: | Necesitas (Vendas x2) para usar este comando!]
    $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})