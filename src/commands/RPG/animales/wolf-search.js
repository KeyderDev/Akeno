module.exports = ({
    name: 'wolf-search',
    code: `
    
    $title[Haz mandado a tu lobo a buscar alimentos]
    $description[Mandaste a tu lobo a buscar recursos y consiguio:
    :bread:Libras de pan: $random[1;4]
    :cookie:Galletas: $random[1;3]
    $color[33F3FF]
    $cooldown[10m;:x:| Espera %time% para volver a mandar a tu lobo a buscar alimentos]
    $setUserVar[lppan;$sum[$getUserVar[lppan;$authorID];$random[1;4]];$authorID]
    $setUserVar[cookies;$sum[$getUserVar[cookies;$authorID];$random[1;3]];$authorID]
    $onlyIf[1<=$getUserVar[lobo];:x: | Necesitas tener un lobo para usar este comando!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})