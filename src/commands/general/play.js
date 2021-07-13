module.exports = ({
    name: "play",
    aliases: "p",
    code: `$color[D1BBBB]$title[Ahora reproduciendo]
           $description[Ahora reproduciendo: $songInfo[title]
           $playSong[$message;5s;no;yes;:x:| Esa cancion no puede ser reproducida en este momento]
           $onlyIf[$message!=;Escribe un nombre valido!]
           $onlyIf[$voiceID!=;:x: Necesitas estar en un canal de voz]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })