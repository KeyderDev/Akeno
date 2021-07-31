module.exports = {
    name: "rechazar-bot",
    code: `
    <a:checkanimado:831161301282979911>| Hecho!
    $channelSendMessage[871108822570270730;
    <@$message[2]>
    {title:Bot Rechazado}{description:$usertag[$message[2]] tu bot $usertag[$message[1]] fue rechazado
    Bot Tester: <@$authorID>
    Razon: $messageSlice[2]}{color:RED}]
    $onlyIf[!=$message[3];:x:| Debes introducir la razon]
    $onlyIf[!=$message[2];:x:| Debes introducir la ID del desarrollador del bot a aceptar | Ejemplo: $getServerVar[prefix]aceptar-bot (id-bot) (id-owner)]
    $onlyIf[!=$message[1];:x:| Debes introducir la ID del bot a rechazar | Ejemplo: $getServerVar[prefix]rechazar-bot (id-bot) (id-owner) (razon)]
    $onlyForRoles[871112196673929216;:x:| Solo los bot tester pueden usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}