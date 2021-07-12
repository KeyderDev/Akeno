module.exports = ({
    name: "suggest",
    code: `$color[D1BBBB]
    $author[$username]
    $thumbnail[https://cdn.discordapp.com/avatars/831280478190436423/29dd60d261ce21524620c1b55531ed51.webp?size=2048?size=2048]
    $title[Nueva Sugerencia]
    $description[$message]
    $footer[🔼 Me gusta! | 🔽 No me gusta!|❓ No se ]
    $useChannel[$getServerVar[suggestion]]
    $argsCheck[>1;Uso: $getServerVar[prefix]suggest <Tu sugerencia>]
    $addReactions[🔼;❓;🔽]
    $deletecommand
$onlyIf[!=$getUserVar[suggestion];:x: | El canal de las sugerencias no esta seteado]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})