module.exports = ({
 name: "captcha",
 code: `
 $title[Verificacion Captcha]
 $description[**Aqui esta tu code <@$authorID>** - $randomString[8]]
 $color[RANDOM]
 $footer[Captcha Verification System]
 $image[https://cdn.discordapp.com/attachments/830487420193472524/845696622772092978/captcha.png]
 $addField[Recordatorio;Use $getServerVar[prefix]verify <Su codigo> para verificarse.]
 $setUserVar[Captcha;$randomstring[8]]
$cooldown[5s;:x:| Espera al menos \`%time%\` para volver a generar un codigo]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]
 $onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})