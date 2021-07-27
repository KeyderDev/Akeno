module.exports = ({
name: "wolf-info",
code: `$color[ffff]$title[Informacion de tu lobo]$description[
Vida: $getUserVar[lobolife]
Adoptado: N/A]
 $onlyIf[1<=$getUserVar[lobo];:x: | Necesitas tener un lobo para usar este comando!]
 $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`



})