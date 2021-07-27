module.exports = {
    name: "change-password",
    code: `
    Mira tu bandeja de mensajes directos
    $sendDM[$getGlobalUserVar[accountowner;$title[Contraseña Restablecida]$description[
        Tu contraseña fue cambiada a $message[1] correctamente
    ]$color[GREEN]]
    $setGlobalUserVar[password;$message[1]]
    $onlyIf[!=$message[1];:x:| Debes introducir la nueva contraseña]
    $onlyIf[falso!=$getGlobalUserVar[account];:x:| Necesitas una cuenta!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado para usar este comando]
    $cooldown[48h;:x:| Espera **%time%** para volver a cambiar la contraseña de tu cuenta]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}