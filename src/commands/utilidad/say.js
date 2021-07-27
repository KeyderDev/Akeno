module.exports = [{
name:"say",
code:`
$if[$isValidObject[$message]!=true]
$message
$disableMentions
$disableEveryoneMentions
$disableRoleMentions
$deletecommand


$else
$djsEval[message.channel.send($getObject)]
$createObject[$message]
$deletecommand
$endif
$onlyIf[$checkContains[$message;@here]!=true;{title:ERROR}{description:Que intentas hacer?!}{color:ffffff} $deletecommand]

$onlyIf[$checkContains[$message;@everyone]!=true;{title:ERROR}{description:Que intentas hacer?!}{color:ffffff} $deletecommand]


$onlyIf[$checkContains[$message;https://;discord.gg/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deletecommand]
$onlyIf[$checkContains[$message;http://;discord.gg/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deletecommand]
$onlyIf[$checkContains[$message;discord.gg/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deleteCommand]
$onlyIf[$checkContains[$message;discord.com/invite/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deleteCommand]
$onlyIf[$checkContains[$message;discord.com/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deleteCommand]

$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
}];