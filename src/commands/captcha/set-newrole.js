module.exports = ({
name: "set-newrole",
code: `
$title[Rol De Verificación Seteado Correctamente]
$description[El rol que se le dara a los nuevos miembros que se verifiquen es <@&$mentionedRoles[1]>]
$color[ffff]
$setServerVar[newrole;$mentionedRoles[1]]
$argsCheck[>1;:x:| Necesitas mencionar un rol]
$onlyPerms[manageroles;:x:| Es necesario tener el permiso \`MANAGE_ROLES\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})