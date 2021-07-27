module.exports = [{
name:"jumbo",
aliases:["emoji","emote"],
code:`
$if[$message[2]==no]
$image[$get[r2]]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2]]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$elseif[$message[2]==yes]
$image[$get[r2].gif]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2].gif]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$endelseif
$elseif[$message[2]==]
$image[$get[r2]]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2]]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$endelseif
$else
__Uso correcto del segundo parámetro: Yes o No (opcional)__
*\`\`\`
Yes: El emoji es animado 
No: El emoji es estático\`\`\`*
$endif

$suppressErrors[{title:ERROR}{description:Se ha producido un error inesperado, compruebe que ha hecho todo correctamente}{color:FFFFFF}]
$onlyIf[$isNumber[$get[r]]==true;{title:ERROR}{description:El ID de emoji no es válido}{color:ffffff}]
$onlyIf[$message!=;$randomText[¿Quieres que te dé una imagen vacía?;Se supone que debes enviar un emoji;<Inserte imagen vacia>]]
$let[r2;https://cdn.discordapp.com/emojis/$get[r]]
$let[r;$advancedTextSplit[$message[1];:;3;>]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"jumbo.id",
aliases:["emoji.id","emote.id"],
code:`
$if[$message[2]==no]
$image[$get[r2]]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2]]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$elseif[$message[2]==yes]
$image[$get[r2].gif]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2].gif]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$endelseif
$elseif[$message[2]==]
$image[$get[r2]]
$color[#FFFFFF]
$footer[ID: $get[r];$authorAvatar]
$onlyIf[$isValidImageLink[$get[r2]]==true;{title:ERROR}{description:El error es indetectable, verifique lo siguiente: si el emoji aún existe, si el emoji es estático o si la ID es válida}{color:ff0000}]

$endelseif
$else
__Uso correcto del segundo parámetro: Yes o No (opcional)__
*\`\`\`
Yes: El emoji es animado 
No: El emoji es estático\`\`\`*
$endif

$suppressErrors[{title:ERROR}{description:Se ha producido un error inesperado, compruebe que ha hecho todo correctamente}{color:FFFFFF}]
$onlyIf[$isNumber[$get[r]]==true;{title:ERROR}{description:El ID de emoji no es válido}{color:ffffff}]
$onlyIf[$message!=;$randomText[¿Quieres que te dé una imagen vacía?;Se supone que debes enviar un emoji;<Inserte imagen vacia>]]
$let[r2;https://cdn.discordapp.com/emojis/$get[r]]
$let[r;$message[1]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}];