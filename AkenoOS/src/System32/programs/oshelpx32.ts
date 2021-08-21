module.exports = {
  name: "oshelp",
  code: `
  Executed: <:oshelpx32:874747290215133225>oshelpx32
\`\`\`
$getGlobalUserVar[directory] AkenoOS oshelpx32
Que es?
AkenoOS es el sistema operativo de Akeno, sirve para ejecutar tareas diarias en formato MS, tambien sirve
para manejar el bot por dentro, manejar variables, valores, etc
Comandos:
$getServerVar[prefix]console
$getServerVar[prefix]debug
$getServerVar[prefix]defrag
$getServerVar[prefix]regedit
$getServerVar[prefix]management
$getServerVar[prefix]regenerate-key
$getServerVar[prefix]get-key
$getServerVar[prefix]install-os


\`\`\`
$onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
