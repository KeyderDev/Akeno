module.exports = ({
name: "mine",
aliases: "minar",
code: `$color[D1BBBB]$title[Uy! Esos minerales me gustan u.u]$description[
Fuiste a la mina $randomText[Shinwaowi;Kindushuri;Karacata;Poroco] y conseguiste:
<:lapislazuli:841831315102892032>$random[1;6] lapizlazuli
<:oro:841831314491703337>$random[1;7] Oro
<:diamante:841831314578735124>$random[1;8] Diamantes
<:esmeralda:841831315216662558>$random[1;4] Esmeraldas
<:cobre:841831314877448232>$random[1;2] Cobre
<:Cuarzo:841831315112591370>$random[1;8] Cuarzo
<:iron:841831314994626580>$random[1;9] Hierro
<:Lingote_de_himato:859586304823263262>$random[3;10] Lingotes de Himato
<:Fragmento_de_himato:859590708704837642>$random[1;10] Fragmentos de Himato]
$setUserVar[himato;$sum[$getUserVar[esmeralda];$random[3;10]]]
$setUserVar[fhimato;$sum[$getUserVar[fhimato];$random[1;10]]]
$setUserVar[esmeralda;$sum[$getUserVar[esmeralda];$random[1;5]]]
$setUserVar[diamante;$sum[$getUserVar[diamante];$random[1;5]]]
$setUserVar[oro;$sum[$getUserVar[oro];$random[1;5]]]
$setUserVar[lapizlazuli;$sum[$getUserVar[lapizlazuli];$random[1;5]]]
$setUserVar[cobre;$sum[$getUserVar[cobre];$random[1;5]]]
$setUserVar[plata;$sum[$getUserVar[plata];$random[1;5]]]



$cooldown[$getServerVar[minetime];:x:| Oye! espera %time% para volver a minar]
$onlyIf[0<=$getUserVar[cascominero];:x: | Necesitas un casco minero para usar este comando!]
$onlyIf[$getUserVar[pico;$authorID]>0;:x:| Necesitas un <:pickaxe:841284596028538880>Pico para usar este comando!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`

})