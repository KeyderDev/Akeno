module.exports = ({
    name: "infractions",
    aliases: "historial",
    code: `$title[| Historial de  $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] ]

    $description[
     Mutes
        $getUserVar[mute;$mentioned[1;yes]]
    
     Kicks
       $getUserVar[kick;$mentioned[1;yes]]
    
     Bans 
        $getUserVar[ban;$mentioned[1;yes]]
    
     Unmute
       $getUserVar[unmute;$mentioned[1;yes]]
    
     Warns 
       $getUserVar[warn;$mentioned[1;yes]]
    TempMutes
       $getUserVar[tempmute;$mentioned[1;yes]]]
    
    $footer[Pedido por $username] 
    $addTimestamp
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $color[D1BBBB]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})