module.exports = {
    name: "report-bug",
    code: `<a:checkanimado:831161301282979911>| Bug enviado
    $deleteCommand
    $channelSendMessage[869580975078801418;{title:Nuevo Error}{description:
    Usuario: $username
    Error: $messageSlice[0;40]
}{color:5865F2}{thumbnail:$authorAvatar}]
$cooldown[1d;:x:| Hey! Espera **%time%** para vover a mandar otro bug]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}