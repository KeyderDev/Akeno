module.exports = ({
name: "set-notverifiedrole",
code: `
$title[Rol No Verificado Seteado Correctamente]
$description[El rol de no verificado para el captcha fue seteado a <@&$mentionedRoles[1]>]
$color[ffff]
$setServerVar[notverified;$findRole[$message[1]]]
$onlyIf[$getServerVar[verified]==$getServerVar[notverified];:x:| El rol  no verificado no puede ser el mismo que el verificado]

$argsCheck[>1;:x:| Necesitas mencionar un rol]
$onlyPerms[manageroles;:x:| Es necesario tener el permiso \`MANAGE_ROLES\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]
`
})