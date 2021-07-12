module.exports = ({
name: "achievement",
code: `$title[Logro desbloqueado!]
$image[https://api.cool-img-api.ml/achievement?text=$message;;%20;-1]
$color[RANDOM]
$onlyIf[$message[1]!=;:x:| Debes proveer algun texto]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})