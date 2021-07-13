module.exports = ({
    name: "checkwarns",
    code: `$argsCheck[>1;Necesitas mencionar a alguien!!]
    $title[Checkwarn]
    $description[El usuario $username[$mentioned[1]] tiene $getUserVar[warn;$mentioned[1]] warns!]
    $footer[Comando ejecutado por $username!]
        $onlyIf[$mentioned[1]!=;Necesitas mencionar a alguien!]
        $argsCheck[>1;:x:| Necesitas mencionar a alguien!]


    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})