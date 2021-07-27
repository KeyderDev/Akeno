module.exports = ({
name: "buy-caña",
code: `$title[Haz comprado una caña:fish:$description[
Con esto podras navegar en los mares en busca de peces y pescarlos! (La caña nunca se rompe)
$setUserVar[caña;1]
$setUserVar[Money;$sub[$getUserVar[Money];300]]
$onlyIf[300<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`

})