module.exports = {
    name: "management",
    code: `
    \`\`\`
    $getVar[akenoOS_version]
    MANEJO

    Discos:
    C:/
    D:/
    E:/
    Carpetas
    Disco C: Akeno
    Disco D: Akeno
    Disco E: Akeno, cache
    \`\`\`



    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
