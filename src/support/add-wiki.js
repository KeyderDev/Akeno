module.exports = ({
    name: "add-wiki",
    code: `
    $color[GREEN]
    $author[$username]
    $thumbnail[$authorAvatar]
    $title[Nueva wiki]
    $description[$message]
    $useChannel[$getServerVar[wikischannel]]
    
    $argsCheck[>1;Uso: $getServerVar[prefix]add-wiki <wiki>]
$onlyIf[!=$getServerVar[wikischannel];:x: | El canal de las wikis no esta seteado]
$onlyForServers[830472834286878730;]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})