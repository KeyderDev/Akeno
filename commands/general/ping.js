module.exports = ({
    name: "ping",
    code: `$description[Ping: 
    :incoming_envelope:•Envio de mensajes: \`$botPing ms\`
    :satellite:•Discord: \`$ping ms\`
    <:database:843552411754299412>•Base de datos: \`$dbPing ms\`
    Intento estar con el menor ping posible!]
    $color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})