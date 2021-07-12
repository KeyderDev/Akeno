module.exports = ({
    name: "report",
    code: `
   
    $title[**Nuevo Reporte**]
    $description[
    Reporte hecho por: $username[$authorID]
    Reporte: $message]
    $color[D1BBBB]
   
    $thumbnail[$userAvatar[$authorID]]

$deletecommand
 $useChannel[$getServerVar[reportchannel]]
$channelSendMessage[$channelID;:white_check_mark:| Reporte enviado correctamente]
    
   $onlyIf[$getServerVar[reportchannel]!=;:x:| Este servidor no tiene canal de reportes, use \`$getServerVar[prefix]set-reportchannel para setear el canal\`]
   $onlyIf[$getServerVar[reportsystem]==true;:x:| El sistema de reportes no esta habilitado]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
   
   
    `
   })