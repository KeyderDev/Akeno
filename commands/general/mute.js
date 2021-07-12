module.exports=({
name: "mute",
code: `
$sendDM[$mentioned[1];{description:Tu tiempo de muteo a terminado en el servidor $serverName[$guildID]}{color:BLUE}]
$takeRoles[$mentioned[1];$getServerVar[mutedrole]]
$wait[$message[2]]
$channelSendMessage[$channelID;{title:Muteado}{description:Se muteo a <@$mentioned[1]> por $message[2]}{color:GREEN}]
$giveRoles[$findMember[$message[1]];$getServerVar[mutedrole]]


$onlyIf[$noMentionMessage!=;:x:| **Ingresa un tiempo valido**]
$onlyIf[!=$getUserVar[mutedrole];:x: | El rol para los muteados no esta configurado, use \`$getServerVar[prefix]set-muterole\`]
$onlyPerms[mutemembers;|:x: **Necesitas el permiso de Mutear Miembros para usar este comando**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})