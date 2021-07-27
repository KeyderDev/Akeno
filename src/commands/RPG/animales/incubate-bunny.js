module.exports = ({
    name: 'incubate-bunny',
    code: `
    
    $title[Haz incubado un huevo de conejo]
    $description[Haz incubado un nuevo animal!]
    $color[33F3FF]
    $cooldown[10s; Espera %time% para volver a incubar otro huevo]
    $setUserVar[cegg;$sub[$getUserVar[cegg];1]]
    $setUserVar[conejo;$sum[$getUserVar[conejo;$authorID];1];$authorID]
    $setUserVar[incubadora;$sub[$getUserVar[incubadora];1]]
    $onlyIf[1<=$getUserVar[cegg];:x: | Necesitas (**Huevo de conejo x1**)!]
    $onlyIf[1<=$getUserVar[incubadora];:x: | Necesitas (**Incubadora x1**)!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})