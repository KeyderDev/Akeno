module.exports = ({
name: "crafteos",
code: `$color[ffff]$title[Crafteos]$description[
Lista de crafteos: 
PC: Ram x1, fuente de poder x1, disco duro x1, cpu x1]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})