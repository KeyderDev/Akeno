module.exports = ({
 name: "verify",
 usage: "$getServerVar[prefix]verify <codigo>",
 code: `
 $title[Verificación Con Exito!]
 $description[**Haz sido verificado como <@$authorID>!**]
 $footer[Captcha Verification System]
 $color[GREEN]
 $giveRole[$authorID;$getServerVar[newrole]]
 $giveRole[$authorID;$getServerVar[verified]]
 $takeRole[$authorID;$getServerVar[notverified]]
 $onlyIf[$message==$getUserVar[Captcha];:x:| El codigo introducido es invalido]
 $onlyIf[!=$getUserVar[Captcha];:x:| Para verificarte, primero debes poner $getServerVar[prefix]captcha]
 $onlyIf[$getGlobalUserVar[bl]==false;:x:| Acceso al bot \`denegado\`]`
})