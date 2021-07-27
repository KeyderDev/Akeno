module.exports = ({
    name: "login",
    code: `$title[Sesion Iniciada]$description[Haz iniciado sesion como $username]
    $color[GREEN]
    $sendDM[$getGlobalUserVar[accountowner];{title:Nuevo Inicio de Sesion}
    {description:Hemos detectado un nuevo inicio de sesion
    Usuario: $username
    }{color:GREEN}]
    $writeFile[./login/login.sql;Usuario: $message[1] | ID: $authorID] 
    $setGlobalUserVar[loggedin;cierto]
    $deletecommand
    $onlyIf[$message[2]==$getGlobalUserVar[password]==false;:x:| Contraseña Incorrecta]
    $onlyIf[$message[1]==$getGlobalUserVar[username]==false;:x:| Nombre de usuario incorrecto]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})