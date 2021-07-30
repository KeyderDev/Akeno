module.exports = ({
    name: "lyrics",
    aliases: ['ly', 'l'],
    description: "Get lyrics from the current playing or a specific song",
    usage: "lyrics (song)",
    category: "music",
    code: `$color[D1BBBB]
    $if[$argsCount>0]
    $title[Letras de $message]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: No se encontro la letra de esta cancion!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[Letras de $songInfo[title]]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: No se encontro la letra de esta cancion!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:La cola de canciones esta vacia!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Necesitas estar en un canal de voz!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro o Premium Classic]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $onlyBotPerms[embedlinks; {description:❌| Necesito el permiso de **EMBED LINKS**}{color:RANDOM}]
`
})