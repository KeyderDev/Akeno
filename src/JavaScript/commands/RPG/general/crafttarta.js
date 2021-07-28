module.exports = ({
name: "crafttarta",
code: `$title[Haz crafteado una tarta!]$description[
Con esta tarta, la podras comerciar o darsela a tus animales!]
$setUserVar[lppan;$sub[$getUserVar[lppan];2]]
$setUserVar[tarta;$sum[$getUserVar[tarta;$authorID];1];$authorID]
$onlyIf[2<=$getUserVar[lppan];:x: | No tienes los ingredientes suficientes, necesitas **Libra de pan (x2)**!]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`




})