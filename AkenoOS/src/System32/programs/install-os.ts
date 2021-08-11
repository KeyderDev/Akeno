module.exports = {
  name: "install-os",
  code: `
  \`\`\`
  AkenoOS | $getVar[akenoOS_version]

  $getGlobalUserVar[directory] AkenoOS have been installed correctly.
  Packages Installed:
  - All Commands
  - Cache Files
  - Debug
  - Data Files
  - ToastedData
  \`\`\`
  $writeFile[./AkenoOS/src/System32/cache/oscache.txt;ID: $authorID - OS Installed]
  $setGlobalUserVar[osinstalled;true]
  $onlyIf[$getGlobalUserVar[software_key]==$message;:x:| Esa clave no es igual a la tuya]
  $onlyIf[$message!=;:x:| Necesitas introducir tu clave de software, consiguela usando $getServerVar[prefix]get-key]
  $onlyIf[$getGlobalUserVar[osinstalled]!=true;:x:| AkenoOS is already installed]
  $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]


  `
}
