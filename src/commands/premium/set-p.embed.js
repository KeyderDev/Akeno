module.exports = {
    name: "set-p.embed",
    code: `$title[Color Cambiado]
    $description[El color de los embeds Premium a sido cambiado]
    $setVar[p.embedcolor;$message[1]]
    $onlyIf[$isValidHex[$replaceText [$message[1];#;]]==true;$getObjectProperty[err.hex]]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}