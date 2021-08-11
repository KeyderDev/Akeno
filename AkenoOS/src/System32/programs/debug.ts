module.exports = {
    name: "debug",
    code: `
    \`\`\`
    AkenoOS | $getVar[akenoOS_version]

    $getGlobalUserVar[directory]
    Architecture: x64
    Cache: $getGlobalUserVar[cache]
    Port: $getGlobalUserVar[console_port]
    IP: $getGlobalUserVar[console_ip]
    Idiom: $getGlobalUserVar[console_lang]
    Disk: $getGlobalUserVar[directory]
    Processes: $getGlobalUserVar[processes]
    Software Key Getted: $getGlobalUserVar[key_getted]
    \`\`\`
      $writeFile[./AkenoOS/src/System32/cache/debug.txt;ID: $authorID - Debug Command / All Info]
    $onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]

    `
}
