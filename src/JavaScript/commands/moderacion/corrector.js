module.exports = {
name:"$alwaysExecute",
code:`
$writeFile[./data.txt;Error 404: Command not found, $authorID]
$channelSendMessage[$channelID;<a:wrong:869274854157848687>| \`El comando $message[1] no existe\`]

$onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message[1];$getServerVar[prefix]]==true;]
`
};