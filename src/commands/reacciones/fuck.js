module.exports = ({
name: "fuck",
code: `$onlyIf[$mentioned[1]!=;Necesitas mencionar a alguien!]
$title[Follada!]
$description[$username follo a  <@$mentioned[1]>]
$footer[]
$color[D1BBBB]
$image[$randomText[https://cdn.discordapp.com/attachments/793824080331669525/797340354159706143/8.gif;https://imgur.com/0LPpXra.gif;https://media.discordapp.net/attachments/793824080331669525/793925626063093820/47.gif;https://cdn.discordapp.com/attachments/602747804418572289/688859179414585373/27.gif]]
$onlyNSFW[Este comando solo se puede ejecutar en un canal marcado como **NSFW**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`



})