module.exports = ({
    name: "daily",
    aliases: "diario",
    code: `$title[Bonificacion diaria]
    $description[Bonificacion: 
    :dollar:$300
    <:twitch:838113649808900157>$500 en donaciones de twitch]
    $footer[Solicitado por $username]
    $color[D1BBBB]
    $cooldown[24h;:x:| Esto es una bonificacion  diaria, espera %time% para la proxima!]
    $setUserVar[Money;$sum[$getUserVar[Money];300]]
    $setUserVar[donaciones;$sum[$getUserVar[donaciones];500]]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]

$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
})