module.exports = ({
    name: "removedp",
    code: `$title[Punto removido!]
    $description[<:devpoint:832409886913462293>Se ha removido un punto de <@$authorID>]
    $setVar[devpoint;$sub[$getVar[devpoint;$mentioned[1]];$noMentionMessage];$mentioned[1]]
    $onlyForIDs[798250899041681428;817148330865197158;Solo los desarrolladores del bot pueden usar este comando]
    $color[33f3ff]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})