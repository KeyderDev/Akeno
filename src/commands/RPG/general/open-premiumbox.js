module.exports = ({
name: "open-premiumbox",
code: `$title[Haz abierto: *Premium Box*]$description[
Recompensas:
<:Bitcoin:846390571458363432>$random[100;200] bitcoins
<:akenocoin:842884874729816114>$random[120;180] coins
<:elixir:842153921387561032>1 elixir magico]
$setUserVar[bitcoin;$sum[$getUserVar[bitcoin;$authorID];$random[100;200]];$authorID]
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[120;180]];$authorID]
$setUserVar[elixirmagico;$sum[$getUserVar[elixirmagico;$authorID];1];$authorID]
$cooldown[1d;:x:| Espera %time% para volver a abrir una Premium box]
$onlyIf[1<=$getUserVar[premiumbox];:x: | Necesitas una Premium box para usar este comando]
$onlyIf[$getGlobalUserVar[PREMIUM;$authorID]==true;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})