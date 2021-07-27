module.exports = {
    name: "set-antialt",
    code: `
    $title[Anti alts seteado]
    $description[El sistema antialts kickeara a todo aquel que se haya creado una cuenta antes de $message[1]]
    $setServerVar[antialts;true]
    $setServerVar[antialtsms;$message[1]]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}