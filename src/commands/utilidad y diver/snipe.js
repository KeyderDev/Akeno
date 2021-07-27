module.exports = [{
name:"snipe",
aliases:["sp"],
code:`
$title[Snipe!]
$description[__**Canal**__:
<#$get[i]>
__**Mensaje**__:
$get[msg]
__**Autor**__:
<@$get[author]>
$footer[Type: $get[type];$authorAvatar]
$color[FFFFFF]

$if[$message[1]!=]
$let[msg;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;$message[1];|;1]]
$let[author;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;$message[1];|;2]]
$let[type;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;$message[1];|;3]]
$onlyIf[$message>0;{title:ERROR}{description:El número de francotiradores debe ser superior a 1}{color:FFFFFF}]
$onlyIf[$isNumber[$message[1]]==true;{title:ERROR}{description:Ese no es un numero valido}{color:FFFFFF}]
$else
$let[msg;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;1;|;1]]
$let[author;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;1;|;2]]
$let[type;$advancedTextSplit[$getChannelVar[snipe;$get[i]];/;1;|;3]]
$endif

$if[$message[2]!=]
$let[i;$findChannel[$message[2];no]]
$onlyIf[$findChannel[$message[2];no]!=undefined;{title:ERROR}{description:No se localizó el canal}{color:FFFFFF}]
$else
$let[i;$channelID]
$endif
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
}];