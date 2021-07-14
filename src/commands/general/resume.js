module.exports = [{
name: "resume",
code: `
$setServerVar[pause;false]
$color[D1BBBB]
$title[Cancion reanudada]
$resumeSong
$onlyIf[$getServerVar[pause]==true;{title:ERROR}{description:Parece que no hay ninguna cancion pausada}{color:ffffff}{footer:En caso de que la cancion si este pausada, use ak.force.resume:$authorAvatar}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
name:"force.resume",
code:`
$setServerVar[pause;false]
$resumeSong
$title[Cancion reanudada]
$description[Se forzo la reanudacion de la(s) cancion(es), es probable que puedan ocurrir errores]
$color[ffffff]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`}]