module.exports = ({
    name: 'craft-himatospell',
    code: `
    
    $title[Haz hecho un hechizo de Himato!]
    $description[Haz hecho un hechizo de Himato! Con este hechizo podras ganar 3,000 fragmentos de himato, usa $getServerVar[prefix]use-himatospell para usarla!]
    $color[33F3FF]
    $cooldown[1d; Espera %time% para volver a hacer un hechizo de dinero!]
    $setUserVar[himatospell;$sum[$getUserVar[himatospell];1]]
    $setUserVar[elixirmagico;$sub[$getUserVar[elixirmagico;$authorID];1];$authorID]
    $setUserVar[fhimato;$sub[$getUserVar[fhimato;$authorID];20];$authorID]
    $onlyIf[20<=$getUserVar[fhimato];:x: | Necesitas (Fragmento de Himato x20)]
    $onlyIf[1<=$getUserVar[elixirmagico];:x: | Necesitas (Elixir Magico x1)]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})