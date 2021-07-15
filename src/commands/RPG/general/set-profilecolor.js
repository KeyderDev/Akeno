module.exports = ({
    name: "set-profilecolor",
    code: `$title[Color de perfil cambiado]
    $description[El color del embed de; perfil a sido cambiado a $message[1]]
    $setGlobalUserVar[profilecolor;$message[1]]
    $onlyIf[$checkContains[$message[1];#]==false:x:| El color del embed del perfil es invalido, asegurese que este en formato HEX y que incluya el caracter \`#\`]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]==true;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]`
})