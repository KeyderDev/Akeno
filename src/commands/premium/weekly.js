module.exports = ({
    name: "weekly",
    aliases: "semanal",
    code: `$title[Bonificacion Semanal]
    $description[Bonificacion: 
    <:akenocoin:842884874729816114>1000
    <:twitch:838113649808900157>900 en donaciones de twitch]
    $footer[Solicitado por $username]
    $color[D1BBBB]
    $cooldown[24h;:x:| Esto es una bonificacion semanal, espera %time% para la proxima!]
    $setUserVar[Money;$sum[$getUserVar[Money];1000]]
    $setUserVar[donaciones;$sum[$getUserVar[donaciones];900]]
    $cooldown[7d;:x:| Esto es una bonificacion semanal, espera %time% para la proxima!]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})