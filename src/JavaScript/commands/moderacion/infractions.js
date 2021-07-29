const error = require(`../../../../errors.json`)
const command = {
    name: "infractions",
    aliases: ["infracciones", "historial", "history"],
    code: `$title[| Historial Moderativo de $username[$findMember[$message[1]]]

    $description[
     Mutes
   $getUserVar[mute;$findMember[$message[1]]]
    Kicks
   $getUserVar[kick;$findMember[$message[1]]]
    
   Bans 
   $getUserVar[ban;$findMember[$message[1]]]
    
   Unmute
   $getUserVar[unmute;$findMember[$message[1]]]
    
   Warns 
   $getUserVar[warn;$findMember[$message[1]]]
    
    $thumbnail[$findMember[$message[1]]]
    $color[GREEN]
    $onlyIf[$findMember[$message;no]!=undefined;${error.err.find.user}]

    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}