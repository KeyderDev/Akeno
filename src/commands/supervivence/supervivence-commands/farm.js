module.exports = ({
    name: "farm",
    code: `$title[**Survival | $getUserVar[mapa]]$description[
        <@$authorID> Haz farmeado: 
        :adhesive_badge:Vendas: $random[1;9]
        :rock:Rocas: $random[1;4]
        Concreto: $random[1;8]
        :zap:Energia de **$getUserVar[character]**: $getUserVar[energy]]
        $color[BLUE]
        $setUserVar[roca;$sum[$getUserVar[roca;$authorID];$random[1;4]];$authorID]
        $setUserVar[concreto;$sum[$getUserVar[concreto;$authorID];$random[1;8]];$authorID]
        $setUserVar[vendas;$sum[$getUserVar[vendas;$authorID];$random[1;9]];$authorID]
        $setUserVar[energy;$sub[$getUserVar[energy;$authorID];1];$authorID]
        $onlyIf[10<=$getUserVar[energy];:x:| Vaya! Te haz quedado sin energia, usa $getServerVar[prefix]restore-energy para restaurarla!]
        $cooldown[7m;:x:| Oye! Espera **%time%** para volver a farmear!]
        $onlyIf[!=$getUserVar[character];:x: | Necesitas un personaje para usar este comando!]
        $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
            :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})