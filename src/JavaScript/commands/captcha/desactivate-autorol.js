module.exports = ({
name: "desactivate-autorole",
code: `
$title[Autorol Desactivado]
$description[
El autorol a sido desactivado correctamente por <@$authorID>]
$color[ffff]
$resetServerVar[autorole]
$onlyPerms[manageroles;:x:| Es necesario contar con el permiso \`MANAGE_ROLES\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})