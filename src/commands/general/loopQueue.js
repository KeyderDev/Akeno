module.exports = ({
    name: "loop-queue",
    aliases: ['lpq', 'lq'],
    description: "Loops the current queue",
    usage: "",
    category: "music",
    code: `$color[D1BBBB]
    $description[🔁| $replaceText[$replaceText[$loopQueue;true;Ahora en loop la cola de canciones!];false;Desactivado el loop!]]
    $onlyIf[$voiceID!=;{color:ffff}{description:Necesitas estar en un canal de voz!}]
    $onlyIf[$queueLength>0;{color:ffff}{description:La cola de canciones esta vacia!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
})