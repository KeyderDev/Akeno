const Discord = require('discord.js');
const token = require(`./config.json`).token
const client = new Discord.Client();

client.on("ready", () => {
console.log(`Listo! ${client.user.tag}`)
});

client.login(token)
const Aoijs = require("aoi.js");
const token = require(`./config.json`).token
const bot = new Aoijs.Bot({
  sharding: true,
  shardAmount: 1,
  mobile: false,
  token: token,
  prefix: ["$getServerVar[prefix]","<@$clientID>","<@!$clientID>","Akeno"],
  fetchInvites: true,
  autoUpdate: true,
})

//Devoluciones de llamada o Callbacks
bot.onMessage();

bot.loadCommands(`./src/`);
bot.loadCommands(`./login`);
bot.loadCommands(`./AkenoOS`)

bot.onJoined();
bot.onLeave();
bot.onChannelCreate();   /* Callbacks que escucha el bot */
bot.onInviteCreate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();
bot.onBanAdd();
bot.onBanRemove();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onRoleUpdate();
bot.onInviteCreate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.botJoinCommand();




bot.status({
text: "ak.help | $getVar[akeno_version]",              /* Estado del bot */
type: "PLAYING",
status: "online",
time: 20
});

bot.status({
  text: "¡Nuevo sistema operativo!",
  type: "LISTENING",
  status: "online",
  time: 10
});






///Callbacks


bot.botJoinCommand({
  channel: "843994166098919484",
  code: `$title[Nuevo Servidor]
  $description[Me han añadido a un nuevo servidor!
  Usuario: <@$authorID>
  Servidor: $serverName | $guildID]
  Invite: [link]($getServerInvite[admin])
  $color[GREEN]`
})

bot.botLeaveCommand({
  channel: "843994166098919484",
  code: `$title[Servidor Menos]
  $description[Me han sacado de un servidor :(
  Usuario: <@$authorID>
  Servidor: $serverName | $guildID]
  Invite [link]($getServerInvite[admin])
  $color[RED]`
})

//////////////////////////////////////////////Bot Autorole

bot.joinCommand({
  channel: "$systemChannelID",
  code: `$giveRoles[$authorID;$getServerVar[botrole]]
  $onlyIf[$isBot[$authorID]==true;]`
})

bot.joinCommand({
  channel: "$systemChannelID",
  code: `
  $sendDM[$authorID;{title:Kickeado}
  {description:Fuiste kickeado de **$serverName** porque se detecto que tu cuenta es una multicuenta}
  {color:RED}]
  $kick[$authorID]
  $onlyIf[$creationDate[$authorID;ms]<$getServerVar[antialtsms];]
  $onlyIf[$getServerVar[antialts]!=true;]`
})

/////////////////////////////////////////////

bot.joinCommand({
  channel: "$getServerVar[wchannel]",
  code: `$title[$getServerVar[wtitle]]
  $description[$getSeverVar[wdescription]]
  $color[$getServerVar[wcolor]]
  $onlyIf[$getServerVar[wactivated]!=true;]`
})


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


bot.joinCommand({
channel: "$getServerVar[ivchannel]",
code: `:white_check_mark:|$username se ha unido
Invitado por: $userInfo[$authorID;inviter]]
Quien ahora en este servidor tiene $userInfo[$authorID;invites] invites
$setUserVar[invites;$sum[$getUserVar[invites];1]]
$onlyIf[$getServerVar[invitetracker;$authorID]==on;]`
})




bot.onGuildJoin({
channel: "$systemChannelID",
code: `$title[Gracias por invitarme!]$description[
Hola! Gracias por invitarme a tu servidor! Esta muy lindo no? Mi prefix es \`ak.\`, para ver mis comandos una ak.help, puedes cambiar mi prefix usando ak.prefix (nuevo prefix), Disfruta!]
$color[D1BBBB]`
})
bot.onGuildJoin()

bot.joinCommand({
channel: "870085506640269333",
code: `<@$authorID>$color[D1BBBB]$title[Nuev@ Usuari@!]$description[
$username Bienvenid@ al servidor de soporte de $username[$clientID]!, pasate por <#830487420193472523> y <#834937155078848533>, tambien es recomendable leer la [documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/)
No olvides invitar a tus amig@s!]
$image[https://cdn.discordapp.com/attachments/854113817633226773/855820615587201034/Baner.png]$thumbnail[$userAvatar[$clientID]]
`
})
//////////////////////////////////////////////

bot.timeoutCommand({
  code: `$sendDM[$timeoutData[banned]; $title[Temp ban acabado]$description[
    Tu temp-ban en **$serverName** a acabado, [Invite del servidor]($getServerInvite)
    $unban[$timeoutData[banned]]`
})

bot.timeoutCommand({
code: `$sendDM[$timeoutData[remindID];{title:Recordatorio}{description:$timeoutData[remindMessage]}
{color:GREEN}]`
});

bot.timeoutCommand({
  code: `$sendDM[$timeoutData[author];{title:Prueba gratuita acabada}{description:
  Su prueba gratuita de Premium en el bot **$username[$clientID]** a finalizado}
  {color:GREEN}]
  $setGlobalUserVar[premiumbadge;;$timeoutData[author]]
  $takeRoles[$timeoutData[author];843920390522929202]
  $setGlobalUserVar[PREMIUM;false;$timeoutData[author]]`
  });

bot.timeoutCommand({
  code: `
  $setGlobalUserVar[PREMIUMgeneral;false;$authorID]
  $setGlobalUserVar[premiumbadge;;$timeoutData[autor]]
  $takeRoles[$timeoutData[autor];843920390522929202]
  $setGlobalUserVar[PREMIUMpro;false;$timeoutData[autor]]
  $setGlobalUserVar[PREMIUMclassic;false;$timeoutData[autor]]

  $setGlobalUserVar[PREMIUMgeneral;false;$timeoutData[autor]]
  $sendDM[$timeoutData[autor];{title:Subscripcion Premium}{description:Tu subscripcion de Premium Classic
  del bot Akeno a terminado. Para volver a tener Premium, debes volver a comprarlo.
  Si usted cree que esto es un error, contacte el equipo de desarrollo.
   Este es un mensaje automatizado.}
  {color:GREEN}]`
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.joinCommand({
  channel: "$systemChannelID",
  code: `
  $sendDM[$authorID;{title:Kickeado}{description:
  Fuiste kickeado de **$serverName** porque el sistema Anti Usuarios Maliciosos estaba activado}{color:RED}]
  $kick[$authorID]
  $onlyIf[$getServerVar[antimalicious]==true;]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==true;]`
})




bot.onChannelDelete({
  channel: "$getServerVar[LogsChannel]",
  code: `$deleteChannels[$channelID]
  $getServerVar[LogsChannel];{title:Canal Eliminado}{description:
  Canal: <#$channelID>
  Creador del canal: <@$authorID>
  Sistema: Anti Channels}
  $onlyIf[$getServerVar[antichannels]==true;]`
})



bot.joinCommand({
  channel: "$systemChannelID",
  code: `$sendDM[$authorID;$title[Kickeado]$description[
    Fuiste kickeado de **$serverName** ya que el anti users esta habilitado]
    $color[RED]]
    $channelSendMessage[$getServerVar[LogsChannel];{title:Usuario Kickeado}{description:
    Usuario: <@!$authorID>
    Fecha de Creacion de cuenta: $creationDate[$authorID;time]
    Sistema: Anti Users}
    {color:GREEN}]
  $kick[$authorID]
  $onlyIf[$getServerVar[antiusers]==true;]`
})


bot.joinCommand({
  channel: "$systemChannelID",
  code: `
    $channelSendMessage[$getServerVar[LogsChannel];{title:Bot Kickeado}{description:
    Bot: <@!$authorID>
    Fecha de Creacion de cuenta: $creationDate[$authorID;time]
    Sistema: Anti Bots}
    {color:GREEN}]
  $kick[$authorID]
  $onlyIf[$isBot[$authorID]==true;]
  $onlyIf[$getServerVar[antibots]==true;]`
})



//Logs
bot.banAddCommand({
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Baneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[RED]
]`,
})


bot.banRemoveCommand({
channel: "$getServerVar[LogsChannel]",
code: `
$title[Usuario Desbaneado]
$description[
⛏ **Usuario:** <@$authorID>
📌 **ID:** \`$authorID\`
🔗 **Tag:** \`$userTag\`]
$color[GREEN]
`,
})


bot.channelCreateCommand({
channel: "$getServerVar[LogsChannel]",
code: `
$title[Canal Creado]
$description[
**Nombre:** \`$newChannel[name]\`
**ID:** \`$newChannel[id]\`
**Categoria:** \`$newChannel[categoryID]\`]
$color[GREEN]
`,
})


bot.channelDeleteCommand({
channel: "$getServerVar[LogsChannel]",
code: `
$title[Canal Eliminado]
$description[
**Name:** \`$oldChannel[name]\`
**ID:** \`$oldChannel[id]
**Ultimo Mensaje:** \`$oldChannel[lastMessageID]\`]
$color[RED]
`,
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
Creador de la invitacion: <@$inviteUserID>
URL: $inviteURL
ID del canal: $inviteChannelID]
$color[GREEN]
`
})




const variables = require("./variables")
bot.variables(variables)
