module.exports = ({
    name: "antilinks-on",
    aliases: ['Activarantilink'],
    code: `<a:checkanimado:831161301282979911>| El antilink a sido habilitado
   $setServerVar[antilink;true]
   $onlyIf[$getServerVar[antilink]!=true;<a:checkanimado:831161301282979911>| El antilink ya a sido habilitado]
   $onlyPerms[manageserver;:x:| Necesitas el permiso de \`MANAGE_SERVER\` para usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })