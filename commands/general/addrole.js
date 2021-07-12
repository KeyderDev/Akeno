module.exports = ({
    name: "addrole",
    code: `
    
    
    $giveRole[$findMember[$message[1]];$mentionedRoles[1]]
    $description[Añadiste un rol a <@$mentioned[1]>]
    $addTimestamp
    $color[D1BBBB]
$argsCheck[>2;$getServerVar[prefix]addrole @Usuario @rol]
$onlyPerms[ban;System | No tienes permisos para hacer esto!!]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
})