module.exports = ({
name: "skip",
code: `
$skipSong
$onlyIf[$queueLength>=2;{title:ERROR}{description:No hay nada que saltar}{color:ffffff}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})