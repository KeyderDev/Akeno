module.exports = {
  name: "regenerate-key",
  code: `
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Key Regenerated correctly
\`\`\`
$onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
$onlyIf[$getGlobalUserVar[key_getted]!=false;:x:| Necesitas tener la clave para usar este comando]
$onlyIf[$getGlobalUserVar[key_regenerated]!=true;:x:| Ya has regenerado la clave]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
