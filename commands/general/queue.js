module.exports = ({
    name: "queue",
    aliases: ['q'],
    code: `$title[Lista de canciones]
$description[$queue[1;10;{number} - {title}]]
$color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})