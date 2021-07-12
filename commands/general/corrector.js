module.exports = {
name:"$alwaysExecute",
code:`
$channelSendMessage[$channelID;{description: Lo sentimos, el comando no existe o lo has escrito mal}{color:5865F2}]

$onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message[1];$getServerVar[prefix]]==true;]
`
};