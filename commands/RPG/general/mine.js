module.exports = ({
name: "mine",
aliases: "minar",
code: `$color[D1BBBB]$title[Uy! Esos minerales me gustan u.u]$description[
Fuiste a la mina $randomText[Shinwaowi;Kindushuri;Karacata;Poroco] y conseguiste:
$random[1;6] lapizlazuli
$random[1;7] Oro
$random[1;8] Diamantes
$random[1;4] Esmeraldas
$random[1;2] Cobre
$random[1;8] Cuarzo
$random[1;9] Plata
$random[3;10] Lingotes de Himato
$random[1;10] Fragmentos de Himato]
$setUserVar[himato;$sum[$getUserVar[esmeralda];$random[3;10]]]
$setUserVar[fhimato;$sum[$getUserVar[fhimato];$random[1;10]]]
$setUserVar[esmeralda;$sum[$getUserVar[esmeralda];$random[1;5]]]
$setUserVar[diamante;$sum[$getUserVar[diamante];$random[1;5]]]
$setUserVar[oro;$sum[$getUserVar[oro];$random[1;5]]]
$setUserVar[lapizlazuli;$sum[$getUserVar[lapizlazuli];$random[1;5]]]
$setUserVar[cobre;$sum[$getUserVar[cobre];$random[1;5]]]
$setUserVar[plata;$sum[$getUserVar[plata];$random[1;5]]]



$cooldown[$getServerVar[minetime];:x:| Oye! espera %time% para volver a minar]
$onlyIf[1<=$getUserVar[cascominero];:x: | Necesitas un casco minero para usar este comando!]
$onlyIf[$getUserVar[pico;$authorID]>0;:x:| Necesitas un <:pickaxe:841284596028538880>Pico para usar este comando!]
`

})