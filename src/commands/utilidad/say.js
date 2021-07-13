module.exports = [{
name:"say",
code:`
$if[$isValidObject[$message]!=true]
$message
$disableMentions
$disableEveryoneMentions
$disableRoleMentions
$deletecommand
$channelSendMessage[861348620988579850;{title:Log}{description:__**Autor:**__ $userTag ($authorID)
__**Mensaje:**__ $message
__**Servidor:**__ $serverName ($guildID)}{color:FFFFFF}]

$else
$djsEval[message.channel.send($getObject)]
$createObject[$message]
$deletecommand
$endif

$onlyIf[$checkContains[$message;https://;discord.gg/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deletecommand]
`
}];