module.exports = ({
name: "reset-inv",
code: `$title[¿?]$description[
:warning:| Estas seguro de que quieres resetear tu inventario? No hay vuelta atras, escribe $getServerVar[prefix]confirm para confirmar]
$color[YELLOW]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})