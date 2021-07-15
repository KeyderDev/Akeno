module.exports = ({
    name: "setsug",
    code: `
    $onlyIf[$mentionedChannels[1]!=;Menciona un canal para establecerlo dónde aparezcan las sugerencias]
    Seteado el canal para las sugerencias: <#$mentionedChannels[1]>, las nuevas sugerencias apareceran ahí
    $setServerVar[suggestion;$mentionedChannels[1]]
    $onlyPerms[admin;Necesitas permisos de administrador para hacer esto]
$onlyIf[$channel[$findChannel[$message[1]];type]==text;{description:<:Error:844685985468121148> El canal <#$findChannel[$message[1]]> debe ser de texto} {color:RED}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})