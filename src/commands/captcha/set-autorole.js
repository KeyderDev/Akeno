module.exports = ({
name: "set-autorole",
code: `
$title[Autorol desactivado]
$description[
El autorol a sido activado correctamente por <@$authorID> correctamente]
$color[ffff]
$setServerVar[autorole;$mentionedRoles[1]]
$argsCheck[>1;:x:| Necesitas mencionar un rol]
$onlyPerms[manageroles;:x:| Es necesario tener el permiso \`MANAGE_ROLES\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})