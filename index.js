const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false, 
  shardAmount: 2,
  mobile: false,
  token: "ODMxMjgwNDc4MTkwNDM2NDIz.YHS8Rg.EupcPbgCUpuZDZ2GveRAvMteqnQ",
  prefix: ["$getServerVar[prefix]","<@$clientID>","<@!$clientID>","Akeno"], 
  fetchInvites: true,
  autoUpdate: true,
})

//Devoluciones de llamada o Callbacks
bot.onMessage();
bot.loadCommands(`./callbacks/`)
bot.loadCommands(`./src/`);
bot.loadCommands(`./new-database`);
bot.loadCommands(`./testing`);
bot.onJoined();
bot.onLeave();
bot.onBanAdd();
bot.onBanRemove();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();
bot.onInviteCreate();

/////////////////////////////////////////////////////////////////////////
bot.status({
text: "ak.help | 1.5.1 Pre release 2",
type: "PLAYING",
status: "streaming",
time: 10
});




//////////////////////////////////////////////

bot.timeoutCommand({
channel: "", 
code: `$sendDM[$timeoutData[userid];$timeoutData[{title:Premium expirado}{description:Tu programa premium del bot Akeno a expirado, si quieres volver a tener premium debes volver a comprarlo en el servidor de Akeno}$takeRoles[$mentioned[1];843920390522929202]]]$resetUserVar[premium;$mentioned[1]]`
});

bot.joinCommand({
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
})

bot.onJoined({
channel: "$getServerVar[ivchannel]",
code: `:white_check_mark:|$username se ha unido
Invitado por: $userInfo[$authorID;inviter]]
Quien ahora en este servidor tiene $userInfo[$authorID;invites] invites
$setUserVar[invites;$sum[$getUserVar[invites];1]]
$onlyIf[$getServerVar[invitetracker;$authorID]==on;]`
})
bot.onJoined()

bot.onGuildJoin({
channel: "$systemChannelID",
code: `$title[Gracias por invitarme!]$description[
Hola! Gracias por invitarme a tu servidor! Esta muy lindo no? Mi prefix es \`ak.\`, para ver mis comandos una ak.help, puedes cambiar mi prefix usando ak.prefix (nuevo prefix), Disfruta!]
$color[D1BBBB]`
})
bot.onGuildJoin()

bot.onJoined({
channel: "830472834286878733", 
code: `<@$authorID>$color[D1BBBB]$title[Nuevo Usuario!]$description[
$username Bienvenido al servidor de soporte de $username[$clientID]!, pasate por <#830487420193472523> y <#834937155078848533>, tambien es recomendable leer la [documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/)]
$image[https://cdn.discordapp.com/attachments/854113817633226773/855820615587201034/Baner.png]$thumbnail[$userAvatar[$clientID]]
$giveRoles[$authorID;$getServerVar[notverified]]`
})
bot.onJoined()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Logs
bot.banAddCommand({ 
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Baneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[RED]`,
})
bot.banRemoveCommand({
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Desbaneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[GREEN]`,
})
bot.channelCreateCommand({ 
channel: "$getServerVar[LogsChannel]",
code: `
$title[Canal Creado]
$description[
**Nombre:** \`$newChannel[name]\`
**ID:** \`$newChannel[id]\`
**Categoria:** \`$newChannel[categoryID]\`]
$color[GREEN]`,
})
bot.channelDeleteCommand({ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Canal Eliminado]
$description[
**Name:** \`$oldChannel[name]\`
**ID:** \`$oldChannel[id]
**Ultimo Mensaje:** \`$oldChannel[lastMessageID]\`]
$color[RED]`,
})
bot.channelUpdateCommand({ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Canal Actualizado]
$description[
**Nombre Antiguo:** \`$oldChannel[name]\`
**Nuevo Nombre:** \`$newChannel[name]\`
**ID:** \`$newChannel[id]\`]
$color[GREEN]
`,
})
bot.joinCommand({ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Nuevo Usuario]$description[<@$authorID> entro al servidor
**Cuenta creada**: $creationdate[$authorID;date]]
`,
})
bot.leaveCommand({
channel:'$channelID',
code:`
$setUserVar[invites;$sub[$get[old];1];$get[i]]
$let[old;$getUserVar[invites;$get[i]]]
$let[i;$userInfo[inviter]]
$suppressErrors
`,
})
bot.leaveCommand({ 
channel: "$getServerVar[LogsChannel]", 
code: `
$title[Usuario Menos]
$description[
**Nombre:** \`$username\`
**ID:** \`$authorID\`]
$color[RED]
`,
})
bot.updateCommand({
channel: "$channelID", 
code:`
$channelSendMessage[$getServerVar[LogsChannel];{title:Mensaje Editado}{description:**Mensaje editado en#COLON#** <#$channelUsed>
**Mensaje Antiguo#COLON#** \`$oldMessage\`
**Nuevo Mensaje#COLON#** \`$message\`
**Mensaje De#COLON#** <@$authorID>}{color:GREEN}]

$setChannelVar[snipe;$OldMessage|$authorID|edited/$getChannelVar[snipe];$channelUsed]
$suppressErrors
`,
})
bot.deletedCommand({
channel: "$channelID",
code: `
$channelSendMessage[$getServerVar[LogsChannel];{title:Mensaje Eliminado}{description:**Eliminado en#COLON#** <#$channelUsed>
**Mensaje de#COLON#** <@$authorID>
**Mensaje Eliminado#COLON#** \`$message\`}{color:ff0000}]

$setChannelVar[snipe;$message|$authorID|deleted/$getChannelVar[snipe];$channelUsed]
$suppressErrors
`})
bot.roleCreateCommand({ 
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
})
bot.roleDeleteCommand({ 
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
})
bot.roleUpdateCommand({ 
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
})

bot.inviteCreateCommand({
channel: '$getServerVar[LogsChannel]',
code: `
$title[Invitacion Creada]$description[
Creador de la invitacion: $inviteUserID
URL: $inviteURL
ID del canal: $inviteChannelID]
$color[GREEN]`
})



const variables = require("./variables")
bot.variables(variables)