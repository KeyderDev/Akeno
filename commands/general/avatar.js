module.exports = ({
name: "avatar",
code: `
$description[[.webp]($userAvatar[$findUser[$message]]) [.png]($replaceText[$userAvatar[$findUser[$message]];webp;png;-1]) [.jpg]($replaceText[$userAvatar[$findUser[$message]];webp;jpg;-1])]
$color[D1BBBB]
$title[Avatar de $username[$findUser[$message]]]
$image[$userAvatar[$findUser[$message]]]
$suppressErrors[{title:Ha ocurrido un error!!}{description:No sabemos que ha ocurrido, por favor hable de esto en el [servidor de soporte](https://discord.gg/xGE2npwNhA)}{color:#FFFFFE}]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})