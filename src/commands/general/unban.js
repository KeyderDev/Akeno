module.exports = ({
    name: "unban",
    code: `
   $sendDM[$findUser[$message];{title:▸ 🔧┇Unban} {description::alert: Tu ban ha sido removido en el servidor \`$serverName[$guildID]\`} {color:4bcb30} {timestamp:ms}]
   $unban[$message[1];Por $userTag[$authorID] Razon: $messageSlice[1]]
   $channelSendMessage[$channelID;{author:🔧 Desbaneo 🔧} {description:👤 **__ID__**:
   \`$message\`
   👮 **__Por__**:
   <@$authorID>} {color:4bcb30} {footer:$username:$authorAvatar} {timestamp:ms}]
   $onlyBotPerms[ban;{title:▸ :x:┇ERROR} {description::alert:| El bot no tiene los permisos suficientes para hacer esto} {footer:$username:$authorAvatar} {color:ff1000} {delete:10s} {timestamp:ms}]
   $onlyIf[$message!=;{title:▸ :x:┇ERROR} {description:Uso: \`$getServerVar[prefix]unban <ID>\`} {color:4bcb30} {footer:$username:$authorAvatar} {timestamp:ms} {delete:10s}]
   $onlyPerms[ban;{title:▸ :x:┇ERROR} {description::alert:| No tienes los permisos suficientes para hacer esto} {footer:$username:$authorAvatar} {color:ff1000} {delete:10s} {timestamp}]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   });