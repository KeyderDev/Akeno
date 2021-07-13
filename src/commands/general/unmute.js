module.exports=({
name: "unmute",
code: `

$takeRoles[$mentioned[1];$getServerVar[mutedrole]]

$channelSendMessage[$channelID;{title:Mute quitado}{description:Se quito el mute a <@$mentioned[1]> }{color:GREEN}]
$takeRoles[$mentioned[1];$getServerVar[mutedrole]]

$onlyPerms[mutemembers;|:x: **Necesitas el permiso de Mutear Miembros para usar este comando**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})