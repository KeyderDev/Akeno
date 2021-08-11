module.exports = {
    name: "update",
    code: `
    \`\`\`
    $getVar[akenoOS_version]

    C:/Akeno: Checking available updates... Please Wait
    \`\`\`
    $onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $writeFile[./AkenoOS/src/System32/cache/cacheL1.txt;Update System: Command Used, $authorID]

    $if[$getGlobalUserVar[update_available]==true]
    $editIn[1s;
    \`\`\`
    Akeno's Update System | 1.0.0

    C:/Akeno: Finded an update, updating... | Update v$getVar[update_version]
    \`\`\`]
    $setGlobalUserVar[uptodate_version;true]
    $setGlobalUserVar[update_available;false]

    $elseIf[$getGlobalUserVar[update_available]==false]
    $editIn[1s;
    \`\`\`
    Akeno's Update System | 1.0.0

    C:/Akeno: You have the latest version.
    \`\`\`]
    $endelseif

    $else
    $endif



    `
}
