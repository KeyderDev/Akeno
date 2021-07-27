module.exports = ({
name: "desactivate-captcha",
code: `
$title[Captcha Desactivado]
$description[
El sistema de verificaion captcha a sido desactivado por <@$authorID>]
$color[ffff]
$resetServerVar[verified]
$resetServerVar[notverified]
$onlyPerms[admin;:x:| Es necesario ser un \`ADMINISTRATOR\`]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})