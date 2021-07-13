module.exports = ({
name: "code",
aliases: "programar",
code: `$cooldown[4m;Espera \`%time%\` para volver programar.]

$setUserVar[bitcoin;$sum[$getUserVar[bitcoin;$authorID];$random[250;450]];$authorID]

$title[$username]
$description[Has trabajado en **$randomText[Epic Games;Unity;Rockstars games;Microsoft;SEGA;Sony;Nintendo;Ubisoft;HUMBLE]** como programador y ganaste __**$$random[250;450]**__. bitcoins]
$color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`

})