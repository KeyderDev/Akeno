module.exports = {
  name: "recovery",
  code: `
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Recovery Mode Activated.
\`\`\`
$setGlobalUserVar[recovery_mode;true;$authorID]
$writeFile[./AkenoOS/src/System32/cache/recovery.txt;ID: $authorID - Recovery Mode Activated]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]




  `
}
