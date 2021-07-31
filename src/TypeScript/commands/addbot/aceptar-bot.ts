module.exports = {
    name: "aceptar-bot",
    code: `
    <a:wrong:869274854157848687>| Hecho!
    $channelSendMessage[871108822570270730;
    <@$message[2]>
    {title:Bot Aceptado}{description:$usertag[$message[2]] tu bot $usertag[$message[1]] fue aceptado
    Bot Tester: <@$authorID>}{color:GREEN}]
    $onlyIf[!=$message[2];:x:| Debes introducir la ID del desarrollador del bot a aceptar | Ejemplo: $getServerVar[prefix]aceptar-bot (id-bot) (id-owner)]
    $onlyIf[!=$message[1];:x:| Debes introducir la ID del bot a aceptar | Ejemplo: $getServerVar[prefix]aceptar-bot (id-bot) (id-owner)]
    $onlyForRoles[871112196673929216;:x:| Solo los bot tester pueden usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}