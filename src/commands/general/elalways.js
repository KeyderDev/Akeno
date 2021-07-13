module.exports = ({
name: "$alwaysExecute",
code: `
$channelSendMessage[$channelID;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] Esta **AFK**: $splitText[2] - Hace $parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time] {delete:10s}]
$onlyIf[$splitText[1]==on;]
$textSplit[$getUserVar[AFK;$mentioned[1]];/]
$onlyIf[$checkContains[$message;<@$mentioned[1]>;<@!$mentioned[1]>]==true;]
`,
nonPrefixed: true
})