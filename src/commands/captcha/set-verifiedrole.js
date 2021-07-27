module.exports = ({
name: "set-verifiedrole",
code: `
$title[Rol Verificado Seteado Correctamente]
$description[El rol de verificado para el captcha fue seteado a <@&$mentionedRoles[1]>]
$color[ffff]
$setServerVar[verified;$findRole[$message[1]]]
$argsCheck[>1;:x:| Necesitas mencionar un rol]
$onlyIf[$getServerVar[notverified]==$getServerVar[verificado];:x:| El rol verificado no puede ser el mismo que el no verificado]
$onlyPerms[manageroles;:x:| Es necesario tener el permiso \`MANAGE_ROLES\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]
`
})