module.exports = ({
name: "afk",
code: `
$setUserVar[AFK;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;on];false;off]/$replaceText[$replaceText[$checkCondition[$message==];true;AFK];false;$message]]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$splitText[1]==on];true;Bienvenido de vuelta <@$authorID>, ya no estas **AFK**];false;<@$authorID> Esta **AFK**, Razon: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;AFK];false;$noMentionMessage]]] 

$setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$dateStamp];false;]]

$if[$role[$highestRole[$authorID];position]<$role[$highestRole[$clientID];position]]
$changeNickname[$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$clientID];false;$authorID];$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$username[$clientID]];false;⟨AFK⟩$nickname[$authorID]]];false;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];false;$username];true;$username[$clientID]]]]
$endif
$textSplit[$getUserVar[AFK];/]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})

