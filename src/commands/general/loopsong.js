module.exports = ({
    name: "loop-song",
    aliases: ['lps', 'ls'],
    description: "Loops the current song",
    usage: "",
    category: "music",
    code: `$color[D1BBBB]
    $description[🔁| $replaceText[$replaceText[$loopSong;true;Ahora esta en loop la cancion actual!];false;Ya no esta en loop la cancion actual.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Necesitas estar en un canal de voz!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{descriptionLa cola de canciones esta vacia!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})