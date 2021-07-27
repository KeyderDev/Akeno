module.exports = [{
    name: "unlock",
    code: `
    $modifyChannelPerms[$splitText[1];+sendmessages;$guildID]
    <#$splitText[1]> fue desbloqueado!
    $onlyIf[$mentionedChannels[1]!=;:x:| Necesitas mencionar el canal a desbloquear]
    $textSplit[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID];false;$mentionedChannels[1]];/]
    $onlyBotPerms[managechannels;❌| Necesito el permiso de Manejar Canales para usar este comando! {delete:10s}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando {delete:10s}]
    $onlyPerms[managechannels;❌| Necesitas el permiso de Manejar Canales para usar este comando! {delete:10s}]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
    name: "lock",
    code: `
    $modifyChannelPerms[$splitText[1];-sendmessages;$guildID]
    <#$splitText[1]> fue bloqueado!
    $textSplit[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID];false;$mentionedChannels[1]];/]
    $onlyIf[$mentionedChannels[1]!=;:x:| Necesitas mencionar el canal a bloquear]
    $onlyBotPerms[managechannels;❌| Necesito el permiso de Manejar Canales para usar este comando! {delete:10s}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando {delete:10s}]
    $onlyPerms[managechannels;❌| Necesitas el permiso de Manejar Canales para usar este comando! {delete:10s}]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}]