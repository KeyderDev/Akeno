module.exports = ({
    name: "enable-report",
    code: ` 
    $title[Sistema de reportes habilitado]
    $description[El sistema de reportes a sido habilitado correctamente por <@$authorID>]
    $color[D1BBBB]
    $setServerVar[reportsystem;true]
   $onlyPerms[manageserver;:x:| Necesitas el permiso de \`Manejar Servidor\` para usar este comando]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **Embed Links**]

   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })
   
