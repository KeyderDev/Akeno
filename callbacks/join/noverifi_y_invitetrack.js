/*
module.exports = ({
channel: "$channelID",
code: `
$giveRoles[$authorID;$getServerVar[notverified]]

$setUserVar[invites;$sum[$userInfo[fake;$get[i]];$userInfo[real;$get[i]]]]
$setUserVar[falsas;$userInfo[fake;$get[i]]]
$setUserVar[reales;$userInfo[real;$get[i]]]
$suppressErrors[$log[|-----------------------------|
| Las variables de $userTag[$get[i]] no se han establecido correctamente
|-----------------------------|]]
$let[i;$userInfo[inviter;$authorID]
`
type: 'joinCommand'
})
*/