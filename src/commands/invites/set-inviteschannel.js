module.exports = ({
    name: "set-inviteschannel",
    code: `
$color[D1BBBB]$title[Canal de invitaciones establecido]$description[El canal donde saldran las invitaciones a sido establecido a $message correctamente]
$setServerVar[ivchannel;$channelID[$channelName]]
   $onlyIf[$getServerVar[invitetracker]==on;:x:| El sistema de invite tracker no esta habilitado en este servidor]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})