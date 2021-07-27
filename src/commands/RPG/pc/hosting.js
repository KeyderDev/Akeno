module.exports = ({
name: "hosting",
code: `$color[ffff]$title[Hosting]$description[
Haz vendido tus servicios de Hosting y ganaste <:akenocoin:842884874729816114>$random[120;200]
$setUserVar[Money;$sum[$getUserVar[Money];$random[120;200]]]
$onlyIf[1<=$getUserVar[pterodactyl];:x: | Necesitas el servicio de Hosting Pterodactyl para usar este comando!]
$onlyIf[1<=$getUserVar[vsc];:x: | Necesitas el editor de codigo Visual Studio Code para usar este comando!]
$onlyIf[1<=$getUserVar[servidor];:x: | Necesitas tener un servidor para usar este comando!]
$onlyIf[1<=$getUserVar[pc];:x: | Necesitas tener una pc para usar este comando!]
$cooldown[5m;:x:|Hey! Espera %time% para volver a usar este comando]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})