module.exports = ({
name: "set-verifiedrole",
code: `
$title[Rol Verificado Seteado Correctamente]
$description[El rol de verificado para el captcha fue seteado a <@&$mentionedRoles[1]>]
$color[ffff]
$setServerVar[verified;$mentionedRoles[1]]
$argsCheck[>1;:x:| Necesitas mencionar un rol]
$onlyPerms[manageroles;:x:| Es necesario tener el permiso \`MANAGE_ROLES\`]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]
`
})