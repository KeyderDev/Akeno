module.exports = ({
name: "fish",
aliases: "pescar",
code: `$color[D1BBBB]
$title[$username]
$description[$randomText[Fuiste a pescar;Fuiste a un rio a pescar;] y ganaste __**$$random[250;750]**__.:dollar:]
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[250;750]];$authorID]
$cooldown[4m;Espera %time% para volver a pescar.]
$onlyIf[$getUserVar[caña;$authorID]>0;:x:| Necesitas una :fish:caña para usar este comando!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`




})