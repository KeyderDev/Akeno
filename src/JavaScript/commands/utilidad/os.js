module.exports = {
    name: "os",
    aliases: "operative system",
    code: `$title[AkenoOS]
    $description[
    AkenoOS es el sistema operativo costumizado de Akeno, el sistema fue hecho por $userTag[$botOwnerID]
    
    Comandos:
    $getServerVar[prefix]console
    $getServerVar[prefix]update
 
    Version: $getVar[akenoOS_version]]
    $color[5865F2]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}