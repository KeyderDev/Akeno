module.exports = ({
name: "upload-video",
code: `$cooldown[4m;Espera \`%time%\` para volver a subir un video.]

$setUserVar[Money;$sum[$getUserVar[subsyttw;$authorID];$random[250;750]];$authorID]

$title[$username]
$description[Subiste un video a YouTube y ganaste __**$$random[250;750]**__. suscriptores]
$color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})