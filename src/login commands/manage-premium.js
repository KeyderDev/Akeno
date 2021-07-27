module.exports = {
    name: "manage-premium",
    code: `$title[Subscripcion Premium]$description[
        Usuario: $username
        Premium: $getGlobalUserVar[PREMIUM]
        Tiempo Restante: \`undefined\`

        **Aclaracion**
        Si usted desea cancelar su subscripcion Premium, use el comando $getServerVar[prefix]cancel-premium
    ]$color[GREEN]
    $onlyIf[falso!=$getGlobalUSerVar[loggedin];:x:| Necesitas estar logeado en tu cuenta para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}