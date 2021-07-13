module.exports = ({
name: "set-antialt",
code: `$color[D1BBBB]$title[Tiempo de antialt cambiado]$description[
Los usuarios que no lleven mas de $message dias en discord seran kiqueados del servidor automaticamente]
$setServerVar[dias;$message[1]]
$onlyIf[$message!=;:x:| Tienes que introducir un valor]

$onlyIf[$getGlobalUserVar[PREMIUM;$authorID]==true;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})