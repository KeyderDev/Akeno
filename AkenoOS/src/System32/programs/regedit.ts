module.exports = [{
  name: "regedit",
  code: `
  Executed: <:regedit:875183270743138304>Regedit
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Registry Editor
System Architecture: x64 _ Value: x64
Programs: 8 _ Value: 8
Sofware Key: $getGlobalUserVar[software_key]
\`\`\`
$onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
name: "value.change.software_key",
code: `
Executed: <:regedit:875183270743138304>Regedit
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Value Changed
$setGlobalUserVar[software_key;Error 502, Bad Gateway]
\`\`\`
$onlyIf[$message[1]!=;:x:| Debes introducir el nuevo valor]
$onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}]
