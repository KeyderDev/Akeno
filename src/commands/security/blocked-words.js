module.exports = {
    name: "blocked-words",
    code: `$title[Palabras Bloqueadas]
    $description[
        $getServerVar[blockword1]
        $getServerVar[blockword2]
        $getServerVar[blockword3]
        $getServerVar[blockword4]
        $getServerVar[blockword5]
    ]$color[GREEN]
    $onlyPerms[managemessages;:x:| Necesitas el permiso de **Manejar Mensajes** para usar este comando]
    $onlyIf[$getServerVar[sysbw]!=false;:x:| El sistema de blockwords no esta activado]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}