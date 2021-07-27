module.exports = ({
name: "descargas",
code: `$color[D1BBBB]$title[Tienda de descargas]$description[
Aqui esta la tienda en donde podras comprar programas para tu pc

<:pterodactyl:847232592713613312>Pterodactyl, Software de Hosting: <:akenocoin:842884874729816114>0 *Gratis* - $getServerVar[prefix]download-pterodactyl
<:vsc:832329898927980625>Visual Studio Code, Editor de codigo: <:akenocoin:842884874729816114>0 *Gratis* - $getServerVar[prefix]download-vsc
$onlyIf[1<=$getUserVar[pc];:x: | Necesitas una pc para usar este comando]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})