module.exports = ({

    name: "poll",
    code: `$title[Encuesta!]
    $addReactions[👍;👎;❔]
    $description[$message] 
    $footer[👍 Si - 👎 No - ❔ Talvez]
    $color[D1BBBB]
    $argsCheck[>1;**Uso:** \$getServerVar[prefix]poll <mensaje de la encuesta>]
    $onlyPerms[admin;:x:| Necesitas el permiso de **Administrador** para usar este comando!]
$deletecommand
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})