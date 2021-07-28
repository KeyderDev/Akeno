module.exports = ({
    name: "setwikis",
    code: `
    
    Seteado el canal para las wikis: <#$mentionedChannels[1]>, las nuevas wikis apareceran ahi
    $setServerVar[wikischannel;$mentionedChannels[1]]
    $onlyForServers[830472834286878730;]
    $onlyPerms[admin;:x:| Necesitas permisos de administrador para hacer esto]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$channel[$findChannel[$message[1]];type]==text;{description:<:Error:844685985468121148> El canal <#$findChannel[$message[1]]> debe ser de texto} {color:RED}]
$onlyIf[$mentionedChannels[1]!=;:x:| Menciona el canal donde apareceran las confesiones]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})