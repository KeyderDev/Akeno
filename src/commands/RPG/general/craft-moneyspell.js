module.exports = ({
    name: 'craft-moneyspell',
    code: `
    
    $title[Haz hecho un hechizo de dinero!]
    $description[Haz hecho un hechizo de dinero! Con este hechizo podras tener entre 2000-5000 de dinero, usa $getServerVar[prefix]use-moneyspell para usarla!]
    $color[33F3FF]
    $cooldown[1d; Espera %time% para volver a hacer un hechizo de dinero!]
    $setUserVar[moneyspell;$sum[$getUserVar[moneyspell];1]]
    $setUserVar[ojodearaña;$sub[$getUserVar[ojodearaña;$authorID];2];$authorID]
    $setUserVar[polvodesuerte;$sub[$getUserVar[polvodesuerte;$authorID];1];$authorID]
    $setUserVar[zanahoria;$sub[$getUserVar[zanahoria;$authorID];3];$authorID]
    $onlyIf[2<=$getUserVar[ojodearaña];:x: | Necesitas (Ojo de araña x2)]
    $onlyIf[1<=$getUserVar[polvodesuerte];:x: | Necesitas (Polvo de suerte x1)]
    $onlyIf[3<=$getUserVar[zanahoria];:x: | Necesitas (Zanahoria x3)]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})