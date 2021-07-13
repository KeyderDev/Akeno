bot.command({
 name: "snipe",
 code: `$author[$getServerVar[deletedAuthor]]
 $title[Snipe]
 $description[$getServerVar[deletedMessage]]
 $footer[$getServerVar[deletedChannel]]
 $thumbnail[$getServerVar[deletedIcon]]
 $onlyIf[$getServerVar[deletedMessage]!=;{title:Error} {description:No hay nada para apuntar.} {color:FF0000}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})

bot.deletedCommand({
 channel: "$channelID",
 code: `
 $setServerVar[deletedIcon;$authorAvatar]
 $setServerVar[deletedMessage;$message]
 $setServerVar[deletedAuthor;$userTag]
 $setServerVar[deletedChannel;#$channelName[$channelUsed]]`
})
bot.OnMessageDelete()