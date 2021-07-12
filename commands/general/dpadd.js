module.exports = ({
    name: "dpadd",
    code: `$onlyIf[$guildID!=;]
    $argsCheck[>1;❌** | Menciona a un usuario **]
    $argsCheck[>2;❌** | Debe poner: "givedp @Usuario (cantidad)**]
    $onlyForIDs[798250899041681428;817148330865197158;Solo los desarrolladores del bot pueden usar este comando]
     
     
    $setUserVar[devpoint;$sum[$getUserVar[devpoint;$mentioned[1]];$noMentionMessage];$mentioned[1]]
    
    $title[**Punto agregado correctamente**]
    $description[<:devpoint:832409886913462293> El desarollador $username le dio a <@$mentioned[1]> $noMentionMessage punto dev <:devpoint:832409886913462293>]
    $footer[Desarrollador responsable $username#$discriminator[$authorID]]
    $color[33f3ff]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})