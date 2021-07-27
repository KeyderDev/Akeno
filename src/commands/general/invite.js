module.exports = ({
name: "invite",
code: `$color[5865F2]$title[Invitacion de Akeno]$description[https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})