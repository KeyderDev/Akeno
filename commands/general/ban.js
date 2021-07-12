module.exports = ({
    name: "ban",
    code: `$ban[$mentioned[1];$noMentionMessage]
    $wait[1s]
    $sendDm[$mentioned[1];{author:▸ 🔨┇Ban} {description::alert: Has sido baneado en el servidor \`$serverName[$guildID]\` por la razón: \`$noMentionMessage\`} {color:D1BBBB} {timestamp:ms}]
    $channelSendMessage[$channelID;{author:🔨 Ban 🔨} {description:👤┇**__Usuario__**:
    <@$mentioned[1]>
    🔨┇**__Por__**:
    <@$authorID>
    📖┇**__Razón__**:
    \`$noMentionMessage\`} {footer:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]} {timestamp:ms} {thumbnail:https://media.tenor.com/images/a166604b0b8f34779dbbd2dd690efb58/tenor.gif} {color:ff1000}]
    $onlyIf[$noMentionMessage!=;{title:▸ :x:┇ERROR} {description:Uso: \`$getServerVar[prefix]ban <@user> <razón>\`} {color:4bcb30} {footer:$username:$authorAvatar} {timestamp:ms} {delete:10s}]
$onlyIf[$mentioned[1]!=$authorID;:x:| No te puedes banear a ti mismo]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]    
$onlyPerms[ban;{title:▸ :x:┇ERROR} {description::alert:| No tienes los permisos suficientes para hacer esto} {color:33f3ff} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    });