module.exports = ({
    name: "unlock-cfor",
    code: `$title[Canal Restringido]$description[
        El canal <#$mentionedChannels[1]> fue desbloqueado para <@$findUser[$message[1]]> correctamente
    ]$color[GREEN]
    $modifyChannelPerms[$mentionedChannels[1];+viewchannel;$findMember[$message[1]]]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})