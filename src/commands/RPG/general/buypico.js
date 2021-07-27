module.exports = ({
name: "buy-pico",
code: `$title[Haz comprado un pico]$description[
Con el pico, podras minar minerales muy preciosos! El pico jamas se rompera
 $setUserVar[Money;$sub[$getUserVar[Money];800]]
 $setUserVar[pico;$sum[$getUserVar[pico];1]
 $onlyIf[800<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
 $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`







})