module.exports = {
  name: "oshelp",
  code: `
  Executed: <:oshelpx32:874747290215133225>oshelpx32
\`\`\`
$getGlobalUserVar[directory] Error 404, No info has been founded.
\`\`\`
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
