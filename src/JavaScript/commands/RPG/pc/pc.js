module.exports = ({
name: "pc",
aliases: "computador",
code: `$color[ffff]$title[PC de $username]$description[
Programas: $getUserVar[programa]
Archivos: $getUserVar[archivo]
Windows: <:windows:847949329822253146>Windows 10]
$onlyIf[1<=$getUserVar[pc];:x: | Necesitas una **PC** para usar este comando!]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})