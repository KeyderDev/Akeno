module.exports = ({
name: "stream",
aliases: "stremear",
code: `$color[D1BBBB]
$title[$username]
$description[Hiciste un stream y ganaste __**$$random[250;750]**__<:akenocoin:842884874729816114> en donaciones, y recibiste $random[1;5]<:twitch:838113649808900157> subs]
$setUserVar[twsubs;$sum[$getUserVar[twsubs;$authorID];$random[1;5]];$authorID]
$setUserVar[donaciones;$sum[$getUserVar[donaciones;$authorID];$random[250;750]];$authorID]
$cooldown[4m;Espera \`%time%\` para volver a hacer un stream]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})