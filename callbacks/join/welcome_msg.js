module.exports = ({
channel: "$getServerVar[wchannel]", 
code:`
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];{mention};<@$authorID>;-1];{username};$username;-1];{server.name};$serverName[$guildID];-1];{members};$membersCount;-1]$image[$getServerVar[image]]
`
type:'joinCommand'
})