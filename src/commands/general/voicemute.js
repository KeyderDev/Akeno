module.exports = ({
    name: "voicemute",
    code: `$if[$isNumber[$message[1]]==false]
   $muteUser[$mentioned[1];yes]
   $title[$userTag[$mentioned[1]] fue muteado en un canal de voz]
   
   $footer[Solicitado por $username;$authorAvatar]
   $addTimestamp
   $elseIf[$isNumber[$message[1]]==true]
   $muteUser[$message[1];yes]
   $title[$userTag[$message[1]] fue muteado en un canal de voz]
   $description[Razon: $replaceText[$message;$message[1] ;;1]]
   $footer[Pedido por $username;$authorAvatar]
   $endelseif
   $endif
   $onlyPerms[mutemembers;{title:Permisos restantes}{description:Necesitas el permiso de **Mutear miembros**}{footer:Pedido por $username:$authorAvatar}{color:RANDOM}{timestamp}]
   $argsCheck[>1;{author:$userTag[$authorID]:$authorAvatar}{title:Argumentos faltantes!}{description:Uso: $getServerVar[prefix]voicemute **Razon** (@usuario/id)}{footer:Pedido por :$authorAvatar}{timestamp}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
   });