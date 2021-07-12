module.exports = ({
    name: "serverinfo",
    code: `
    $title[Server Info]
    $addField[**Nivel de verificacion**;$serverVerificationLevel;yes]
    $addField[**Miembros**;
    \`\`\`Todos: $membersCount\`\`\`
    \`\`\`Usuarios: $sub[$membersCount;$botcount]\`\`\`
    \`\`\`Bots: $botCount\`\`\`;yes]
    $addField[**Canales**;
    \`\`\`Todos: $channelCount\`\`\`
    \`\`\`Texto: $channelCount[text]\`\`\`
    \`\`\`Voz: $channelCount[voice]\`\`\`;yes]
    $addField[**Roles**;$guildRoles;yes]
    $addField[**Emojis**;| $serverEmojis |;yes]
    $addField[**Dia de creacion**;$creationDate[$guildID];yes]
    $addField[**Nivel de boost**;$serverBoostLevel;yes]
    $addField[**Boosts**;$serverBoostCount;yes]
    $addField[**Region**;$serverRegion;yes]
    $addField[**Server Invite**;$getServerInvite;yes]
    $addField[**Dueño**;<@$ownerID>;yes]
    $addField[**Nombre del servidor**;$serverName[$guildID];yes]
    $color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
   })