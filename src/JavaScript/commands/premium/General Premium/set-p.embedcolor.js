module.exports = {
    name: "set-p.embedcolor",
    code: `$title[Color Cambiado]
    $description[El color de los embeds Premium a sido cambiado]
    $setVar[pembedcolor;$message[1]]
    $onlyIf[$isValidHex[$replaceText [$message[1];#;]]==true;\`ERROR: HEX Invalido\`]    
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro o Premium Classic]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}