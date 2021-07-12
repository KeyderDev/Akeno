module.exports = ({
    name: "leveling",
    description: "Change whether leveling should be enabled or disabled in the server",
    usage: "leveling <enable/disable>",
    category: "leveling",
    code: `$color[33f3ff]
    $description[<a:checkanimado:831161301282979911>| Ahora el sistema de leveling esta "$getServerVar[leveling]".]
    $setServerVar[leveling;$toLowerCase[$message[1]]]
    $onlyIf[$getServerVar[leveling]!=$message[1];{description:<a:checkanimado:831161301282979911>| El sistema de leveling ya esta $message[1]!}{color:ffff}]
    $onlyIf[$checkContains[$message[1];enable;disable;enabled;disabled]==true;{description: Escoje entre "enable" o "disable"!}{color:ffff}]
    $onlyIf[$message[1]!=; {description: :x:| Porfavor especifica entre "enable" o "disable"!}{color:ffff}]
    $onlyPerms[manageserver;{description:❌| Necesitas el permiso de - **Manage Server** para usar este comando }{color:ffff}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})