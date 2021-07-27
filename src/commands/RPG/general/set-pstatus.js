module.exports = ({
name: "set-pstatus",
code: `$color[ffff]$title[Status Cambiado]$description[
El status a sido cambiado correctamente]
$setGlobalUserVar[pstatus;$messageSlice[0;40]]
$onlyIf[$charCount[$message]<=100;:x:| No puedes poner tu descripción con más de 100 caracteres]
$onlyIf[$checkContains[$message;https://;discord.gg/]!=true;{title:ERROR}{description:No puedes enviar links!}{color:ffffff} $deletecommand]

$onlyIf[$checkContains[$message;http://;discord.gg/]!=true;:x:| No puedes poner un link en tu estado!]


$onlyIf[!=$message[1];:x:| Debes poner tu nuevo estado]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})