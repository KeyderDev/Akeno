module.exports = ({
 name: "dm", 
 code: `$sendDm[$findUser[$message[1]];{title::incoming_envelope: Correo}
{description:Recibiste un correo de $username[$authorID]
(<@$authorID>)
**Mensaje**
$messageSlice[1]

**Servidor**
$serverName}
{color:D1BBBB}]

$color[$getVar[pembedcolor]]
$channelSendMessage[$channelID;$title[Mensaje enviado a $username[$findUser[$message[1]]]]]
$deleteCommand
$suppressErrors[{title::x:| Error}{description:Un error ocurrio mientras se procesaba la peticion, intenta de nuevo, si persiste el error, contacta con un staff del servidor de soporte}]
$onlyIf[$isUserDmEnabled[$findUser[$message[1]]]!=false;{title::x:| Error}{description: <@$findUser[$messags[1]]> tiene el md \`cerrado\`}{color:ff0000}{delete:10s}]
$onlyIf[$messageSlice[1]!=;{title::x:| Error}{color:ff0000}{description:**Tipo de error:**\n\`\`\`kt\nNo escrito el mensaje a enviar\n\`\`\`\n**Uso correcto:**\n\`\`\`kt\n$getServerVar[prefix]dm <id/mencion> <mensaje>\n\`\`\`\n**Ejemplo:**\n\`\`\`kt\n\$getServerVar[prefix]dm 510349473420017666 Hola, amigo!\n\`\`\`}{delete:10s}]
$onlyIf[$message[1]!=;{title::x:| Error}{description:**Tipo de error:**\n\`\`\`kt\nNo se dio una id/mencion\n\`\`\`\n**Uso correcto:**\n\`\`\`kt\n$getServerVar[prefix]dm <id/mencion> <message>\n\`\`\`}{color:ff0000}{delete:10s}]
$onlyBotPerms[embedlinks;:no: **Error**\n\`\`\`kt\nTipo de error: Permiso requerido \nNecesito los permisos de EMBED_LINKS, EXTERNAL_EMOJIS !\n\`\`\`{delete:59s}]
$onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro o Premium Classic]
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
});