module.exports = ({
    name: "set-reportchannel",
    code: `
   
   $title[Canal de reportes seteado]
   $description[
       El canal de reportes a sido seteado al canal <#$mentionedChannels[1]> correctamente por <@$authorID>]
       $color[D1BBBB]
   $setServerVar[reportchannel;$mentionedChannels[1]] 
   $onlyIf[$mentionedChannels[1]!=;:x:| Porfavor mencione el canal donde saldran los reportes]
   $onlyPerms[manageserver;:x:| Necesitas el permiso de \`Manejar Servidor\` para usar este comando]
$onlyIf[$channel[$findChannel[$message[1]];type]==text;{description:<:Error:844685985468121148> El canal <#$findChannel[$message[1]]> debe ser de texto} {color:RED}]
   $onlyIf[$getServerVar[reportsystem]==true;:x:| El sistema de reportes no esta activado]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]

   `
   })