module.exports = ({
    name: "expcooldown",
    aliases: ['expcooldown'],
    description: "Change the server XP cooldown",
    category: "leveling",
    usage: "xpcooldown <number in seconds>",
    code: `$description[<a:checkanimado:831161301282979911>| El cooldown de leveling se ha cambiado a "$message".]
    $color[D1BBBB]
    $setServerVar[expcd;$message]
    $onlyIf[$message!=;{description::x:| Debe especificar un mensaje para cambiar el cooldown de XP del servidor!(En segundos)
        Ejemplo - $getServerVar[prefix]expcooldown 60 (1 minuto)}{color:ffff}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description::x:|  El sistema de leveling no esta habilitado en este servidor! para habilitarlo, use \`$getServerVar[prefix]leveling enable\`}{color:ffff}]
   $onlyPerms[manageserver;{description:❌| Necesitas el permiso de - **Manage Server** para usar este comando }{color:D1BBBB}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
  })