module.exports = ({
name: "animal-list",
code: `$color[ffff]$title[Lista de animales]$description[
Aqui esta la lista de animales que puedes comprar
- Lobos / Comun
- Conejos / Comun
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})