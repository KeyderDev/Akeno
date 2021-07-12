module.exports = ({
    name: "antilinks-off",
    aliases: ['disableal'],
    code: `<a:checkanimado:831161301282979911>| Antilinks desabilitado
   $setServerVar[antilink;false]
   $onlyIf[$getServerVar[antilink]!=false;:x:| El antilinks no esta activado]
   $onlyPerms[manageserver;:x:| Necesitas el permiso de  \`MANAGE_SERVER\` para usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })