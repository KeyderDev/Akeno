module.exports = {
    name: "support",
    code: `<a:checkanimado:831161301282979911> Hecho!
    $channelSendMessage[870657547370127430;{title:Alguien necesita ayuda...}{description:
    Usuario: <@$authorID>
    Servidor: [$serverName[$guildID]]($getServerInvite)
    Proposito: $message
   }{color:GREEN}]
   $cooldown[10m;:x:| Espera **%time%** para volver a usar este comando]
   $onlyIf[!=$message;:x:| Debes introducir un proposito]
   $onlyIf[$getGlobalUserVar[PREMIUMpro;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
$cooldown[10m;:x:| Espera **%time%** para volver a usar este comando]
`}