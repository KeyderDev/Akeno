module.exports = ({
name: "craft-pc",
code: `$title[Haz crafteado una pc]$description[
Disfruta, <:stonks:847254316456869909>]
$setUserVar[ram;$sub[$getUserVar[ram];1]]
$setUserVar[discoduro;$sub[$getUserVar[discoduro];1]]
$setUserVar[ps;$sub[$getUserVar[ps];1]]
$setUserVar[cpu;$sub[$getUserVar[cpu];1]]
$setUserVar[motherboard;$sub[$getUserVar[motherboard];1]]
$setUserVar[pc;$sum[$getUserVar[pc;$authorID];1];$authorID]
$onlyIf[1<=$getUserVar[ram];]
$onlyIf[1<=$getUserVar[cpu];]
$onlyIf[1<=$getUserVar[motherboard];]
$onlyIf[1<=$getUserVar[discoduro];]
$onlyIf[1<=$getUserVar[ps];]
$supressErrors[Para craftear una pc, necesitas algunas cosas, usa el comando $getServerVar[prefix]crafteos]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`})