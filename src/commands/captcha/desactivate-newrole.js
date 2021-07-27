module.exports = ({
name: "desactivate-newrole",
code: `
$title[Rol De Verificación Desactivado]
$description[
El autorol que se daba a los miembros que se verificaban a sido desactivado correctamente por <@$authorID>]
$color[ffff]
$resetServerVar[newrole]
$onlyIf[admin;:x:| Es necesario ser un \`ADMINISTRATOR\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})