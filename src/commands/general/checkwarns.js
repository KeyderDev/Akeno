module.exports = ({
    name: "checkwarns",
    code: `
    $title[Checkwarn]
    $description[El usuario <@$findMember[$message[1]]> tiene $getUserVar[warn;$findMember[$message[1]]] advertencias!]
    $footer[Comando ejecutado por $username!]
    $onlyIf[$mentioned[1]!=;Necesitas mencionar a alguien!]
    $argsCheck[>1;:x:| Necesitas mencionar a alguien!]
    $color[D1BBBB]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})