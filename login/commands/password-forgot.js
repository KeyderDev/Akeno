module.exports = {
    name: "forgot-password",
    code: `$title[Restablecimiento de contraseña]$description[
        Parece que te haz olvidado de la contraseña de tu cuenta, te la hemos mandado a tu bandeja de entrada

    ]$color[GREEN]
    $sendDM[$getGlobalUserVar[accountowner];{Peticion De Contraseña}{description:
    Hemos recibido una peticion de contraseña de parte de $username

    Contraseña Actual: $getGlobalUserVar[password]
    *Si deseas cambiar tu contraseña, usa $getServerVar[prefix]change-password}{color:GREEN}]*
    $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}