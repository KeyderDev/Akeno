module.exports = {
    name: "create-account",
    aliases: "register",
    code: `$title[Cuenta Creada]$description[
        Revisa tu bandeja de mensajes directos para obtener tu usuario y contraseña
    ]
    $sendDM[$authorID;
    {title:Cuenta de Akeno Creada correctamente}

    {description:Usuario: $message[1]
    Contraseña: $message[2]
    Tus datos han sido guardados en la base de datos}
    {color:GREEN}]
    $deleteCommand
    
    $setGlobalUserVar[account;cierto]
    $setGlobalUserVar[accountowner;$authorID]
    $setGlobalUserVar[username;$message[1]]
    $setGlobalUserVar[password;$message[2]]
    $writeFile[./login/register.sql;Usuario: $message[1] | Contraseña: $message[2] | Dueño: $authorID]
    $onlyIf[$findSpecialChars[$message[2]]==;:x:| La contraseña no puede contener caracteres especiales]    
    $onlyIf[$findSpecialChars[$message[1]]==;:x:| El nombre de usuario no puede contener caracteres especiales]    
    $onlyIf[!=$message[2];:x:| Debes ingresar la contraseña de tu nueva cuenta]
    $onlyif[!=$message[1];:x:| Debes de ingresar el nombre de usuario de tu nueva cuenta]
    $onlyIf[cierto!=$getGlobalUserVar[account];:x:| Ya tienes una cuenta!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}