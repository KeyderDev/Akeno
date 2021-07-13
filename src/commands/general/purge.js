module.exports = ({
    name:"purge",
    code:`$author[Mensajes eliminados!]
    $title[$usertag]
    $description[<@$authorid>, Se han eliminado $replacetext[$replacetext[$checkcondition[$splittext[1]==$message];true;all($message/$message)];false;$splittext[1]/$message] mensajes!]
    $footer[Pedido por $username;$authoravatar]
    $thumbnail[$useravatar[$clientid]]
    $color[GREEN]
    $textsplit[$clear[$message;everyone;$channelid;yes]; ]
    $onlybotperms[managemessages;:x:| No tengo suficientes permisos!]
    $onlyperms[managemessages;:x:| Necesitas el permiso de **Manegar Mensajes** para usar este comando!]
    $onlyif[$isnumber[$message]==true;:x:| Pon una cantidad valida!]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})