module.exports = {
    name: "set-wtitle",
    code: `$title[Titulo de bienvenida cambiado]
    $description[La descripcion de la bienvenida a sido cambiada correctamente por <@$authorID>]
    $color[GREEN]
    $setServerVar[wtitle;$message[1]]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}