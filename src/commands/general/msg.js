module.exports = ({
    name: "msg",
    code: `
    $onlyperms[admin;Solo un **admin** puede usar este comando]
    $dm[798250899041681428]
    $title[¡Nuevo mensaje!]
    $description[Mensaje
    Servidor: $serverName[$guildID]
    Usuario: $username#$discriminator[$authorID]
    Mensaje: $message]
    $addField[ Invitacion al Servidor del mensaje:; [Invitacion]($getServerInvite)]
    $footer[Atiendelo rápido!]
    $color[D1BBBB]
    $thumbnail[$authorAvatar]
    $cooldown[1d;Espera 1 dia para volver a mandarle un mensaje al desarrollador del bot]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})