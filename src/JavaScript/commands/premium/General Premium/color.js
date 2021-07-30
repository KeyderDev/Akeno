module.exports = {
    name: "color",
    code: `
    $title[Este es el color que buscabas?]
    $color[$getVar[pembedcolor]]
   $image[https://api.no-api-key.com/api/v2/color?hex=$toLowercase[$replaceText[$message[1];#;;1]]]
    $onlyIfMessageContains[$message[1];#;https://api.no-api-key.com/api/v2/color?color=$replaceText[$message; ;%20;2]]
    $argsCheck[>1;:x:| Porfavor ingrese un color. Como \`red\`, \`#FF0000\` or \`rgb(255 0 0)\`.]
    $argsCheck[<3;:x:| Color Invalido]
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro o Premium Classic]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   };