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
$onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})