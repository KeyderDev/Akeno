/*module.exports = [{ 
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Baneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[RED]`,
type:'banAddCommand'
},{
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Desbaneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[GREEN]`,
type:'banRemoveCommand'
},{ 
channel: "$getServerVar[LogsChannel]",
code: `
$title[Canal Creado]
$description[
**Nombre:** \`$newChannel[name]\`
**ID:** \`$newChannel[id]\`
**Categoria:** \`$newChannel[categoryID]\`]
$color[GREEN]`,
type:'channelCreateCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Canal Eliminado]
$description[
**Name:** \`$oldChannel[name]\`
**ID:** \`$oldChannel[id]
**Ultimo Mensaje:** \`$oldChannel[lastMessageID]\`]
$color[RED]`,
type:'channelDeleteCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Canal Actualizado]
$description[
**Nombre Antiguo:** \`$oldChannel[name]\`
**Nuevo Nombre:** \`$newChannel[name]\`
**ID:** \`$newChannel[id]\`]
$color[GREEN]
`,
type:'channelUpdateCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
<@$authorID> ha entrado al servidor
`,
type:'joinCommand'
},{
channel:'$channelID',
code:`
$setUserVar[invites;$sub[$get[old];1];$get[i]]
$let[old;$getUserVar[invites;$get[i]]]
$let[i;$userInfo[inviter]]
$suppressErrors
`,
type:'leaveCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Usuario Menos]
$description[
**Nombre:** \`$username\`
**ID:** \`$authorID\`]
$color[RED]
`,
type:'leaveCommand'
},{
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Mensaje Editado]
$description[
**Mensaje editado en:** <#$channelUsed>
**Mensaje Antiguo:** \`$oldMessage\`
**Nuevo Mensaje:** \`$message\`
**Mensaje De:** <@$authorID>]
$color[GREEN]`,
type:'updateCommand'
},{
channel: "$getServerVar[LogsChannel]",
code: `
$title[Mensaje Eliminado]
$description[
**Eliminado en:** <#$channelUsed>
**Mensaje de** <@$authorID>
**Mensaje Eliminado:** \`$message\`]
$color[RED]`
type:'deletedCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Rol Creado]
$description[
**Nombre:** \`$newRole[name]\`
**Role ID:** \`$newRole[id]\`
**Color:** \`$newRole[color]\`
**Position:** \`$newRole[position]\`]
$color[GREEN]
`,
type:'roleCreateCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Rol Eliminado]
$description[
**Nombre:** \`$oldRole[name]\`
**Role ID:** \`$oldRole[id]\`
**Color:** \`$oldRole[color]\`
**Position:** \`$oldRole[position]]
$color[RED]
`,
type:'roleDeleteCommand'
},{ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Rol Actualizado]
$description[
**Nombre Antiguo:** \`$oldRole[name]\`
**Nuevo Nombre:** \`$newRole[name]\`
**Role ID:** \`$newRole[id]\`
**Color Antiguo:** \`$oldRole[color]\`
**Nuevo Color:** \`$newRole[color]\`
**Position:** \`$newRole[position]\`]
$color[GREEN]
`,
type:'roleUpdateCommand'
}];
*/