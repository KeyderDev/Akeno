module.exports = {
name:"$alwaysExecute",
code:`
$channelSendMessage[$channelID;<a:wrong:869274854157848687>| \`El comando $message[1] no existe\`]

$onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message[1];$getServerVar[prefix]]==true;]
`
};