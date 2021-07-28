module.exports = ({
name: "work",
aliases: "trabajar",
code: `$cooldown[4m;Espera \`%time%\` para volver a trabajar.]

$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[250;750]];$authorID]

$title[$username]
$description[Has trabajado como **$randomText[empresario;verdulero;vendedor de autos;arqueologo;granjero;profesor;astronauta;futbolista;cientifico;paleontologo;developer de namco;amo de casa]** y ganaste __**$$random[250;750]**__.]
$color[D1BBBB]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`

})