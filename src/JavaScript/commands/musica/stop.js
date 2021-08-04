module.exports = ({
    name: "stop",
    aliases: ['s'],
    code: `
    $title[Gracias por usarme!]
    $description[Gracias por usarme! No olvides que si deseas hacer alguna donacion monetaria, puedes hacerla mediante [PayPal](https://paypal.me/akenobot1)
    $color[5865F2]
    $stopSong
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})