module.exports = ({
name: "set-bugfixerbadge",
code: `$title[Insignia puesta]$description[
La insignia se le puso a <@$mentioned[1]> correctamente]
$color[5865F2]
$setGlobalUserVar[bugfixer;<:bug_fixer:849324827952939048>;$findUser[$message[1]]]
$onlyForIds[798250899041681428;:x:| Solo el desarrollador del bot puede usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})