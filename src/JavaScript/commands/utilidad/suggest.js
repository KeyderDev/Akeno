module.exports = ({
    name: "suggest",
    code: `
    $color[D1BBBB]
    $author[$username]
    $thumbnail[$userAvatar[$clientID]]
    $title[Nueva Sugerencia]
    $description[$message]
    $footer[<a:checkanimado:831161301282979911> Me gusta! | <:tick:846222968106909707> Mas o menos | <a:wrong:869274854157848687> No me gusta ]
    $addReactions[<a:checkanimado:831161301282979911>;<:tick:846222968106909707>;<a:wrong:869274854157848687>]
    $useChannel[$getServerVar[suggestchannel]]
    $deletecommand
    $argsCheck[>1;Uso: $getServerVar[prefix]suggest <Tu sugerencia>]
$onlyIf[!=$getServerVar[suggestchannel];:x: | El canal de las sugerencias no esta seteado]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})