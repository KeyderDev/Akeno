module.exports = {
  name: "get-key",
  code: `Executed: :key:Get Key
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Key Getted | $randomString[16]
\`\`\`
$setGlobalUserVar[key_getted;true]
$setGlobalUserVar[software_key;$randomString[16]]
$onlyIf[$getGlobalUserVar[key_getted]!=true;:x:| Ya has reclamado la clave]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]  `
}
