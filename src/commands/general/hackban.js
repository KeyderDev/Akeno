module.exports ({
    name: "hackban",
    code: `$color[ffff]
    Haz hackbaneado a  <@$message>
    $banID[$message]
$argsCheck[>1;Porfavor escribe la id del usuario a hackbanear]
$suppressErrors[El usuario no existe!]
   $onlyIf[$isNumber[$message]==true;Tienes que poner la id del usuario!]
   $onlyPerms[ban;Necesitas el permiso de "Banear miembros" para usar este comando!]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})