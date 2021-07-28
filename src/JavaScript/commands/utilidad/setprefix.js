module.exports = ({
    name: "setprefix",
    aliases: ['changeprefix', 'prefix'],
    code: `$color[D1BBBB]$author[⁉ Prefix Cambiado]
    $description[Mi nuevo prefix es \`$message\`]
    $setServerVar[prefix;$message]

    $onlyIf[$message[1]!=;Necesitas poner el prefix nuevo! | Ejemplo: \`$getServerVar[prefix]setprefix /\`]
    $onlyPerms[admin;:x:| No tienes el permiso de  \`ADMINISTRATOR\`]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    })