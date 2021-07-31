module.exports = {
    name: "addbot",
    code: `
    $deleteCommand
    $title[Bot Enviado]
    $description[ $userTag[$authorID], Tu bot <@$message[1]> fue enviado correctamente. Puede que se tarde un poco para que tu bot este en el servidor, en el canal <#871108822570270730> podras ver el estado de tu bot, porfavor, ten paciencia]
    $color[GREEN]
    $channelSendMessage[871113440427655228;{title:Nuevo Bot}{description:
    Desarrollador: $usertag[$authorID]
    ID (bot): $message[1]
    ID (dev): $authorID
    Prefix: $message[2]
    Invite: [link](https://discord.com/api/oauth2/authorize?client_id=$message[1]&permissions=8&scope=bot)
}{color:5865F2}]
    $onlyIf[!=$message[2];:x:| Debes introducir el prefix de tu bot]
    $onlyIf[!=$message[1];:x:| Debes introducir la ID de tu bot]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}