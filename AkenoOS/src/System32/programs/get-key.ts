module.exports = {
  name: "gen-os.key",
  code: `Executed: :key:Gen-os.key.exe
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Key Getted | $randomString[16]
\`\`\`
$setGlobalUserVar[key_getted;true;$message]
$setGlobalUserVar[software_key;$randomString[16];$message]
$onlyIf[$message!=;:x:| A quien le generaras la clave?]
$onlyForIDs[$botOwnerID;:x:| Solo el desarrollador del bot puede generar claves de software]
$onlyIf[$getGlobalUserVar[key_getted]!=true;:x:| Ya has reclamado la clave]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]  `
}
