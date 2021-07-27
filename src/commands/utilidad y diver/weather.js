module.exports = ({
    name: "weather",
    code: `$author[Clima de $tolocaleuppercase[$message];$servericon]
    $image[$get[p]]
    $color[RANDOM]
    $description[Aqui esta el clima del lugar, <@$authorid>!]
    $footer[Si no puedes ver la imagen, intenta de nuevo, si el error persiste, pusiste un lugar incorrecto]
    $onlyif[$message!=;Enter a place!]
    $servercooldown[10s;On a cooldown!]
    $onlyif[$get[p]!=;{description:Lugar no encontrado}{color:FF0000}]
    $let[p;https://api.avux.ga/weatherimage?location=$message&background=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoknYCckV17nqFV8Lo-HyxEPZ_syVkg5KvA&usqp=CAU]
    $onlyif[$isbot[$authorid]==false;]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    
    `})