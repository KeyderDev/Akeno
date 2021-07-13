module.exports = ({
    name: "addwiki",
    code: `$onlyServer[831331337423945759;Esto solo esta disponible para un servidor en especifico] $useChannel[$getServerVar[wiki]]
    $argsCheck[>1;Uso: $getServerVar[prefix]addwiki <Tu wiki>]
    $author[$username]
    $authorIcon[$authorAvatar]
    $title[Nueva wiki]
    $description[$message]
    $color[D1BBBB]
    $footer[Wiki por $username]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   
})