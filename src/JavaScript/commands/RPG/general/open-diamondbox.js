module.exports = ({
name: "open-diamondbox",
code: `$title[Haz abierto: *Diamond Box*]$description[
Recompensas:
:fish:1 cañas
<:akenocoin:842884874729816114>$random[110;140] coins
<:elixir:842153921387561032>1 elixir magico]
$setUserVar[caña;$sum[$getUserVar[caña;$authorID];1];$authorID]
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[110;140]];$authorID]
$setUserVar[elixirmagico;$sum[$getUserVar[elixirmagico;$authorID];1];$authorID]
$cooldown[1d;:x:| Espera %time% para volver a abrir una diamond box]
$onlyIf[1<=$getUserVar[diamondbox];:x: | Necesitas una Diamond box para usar este comando]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})