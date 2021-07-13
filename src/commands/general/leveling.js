module.exports = ({
name: "leveling",
code: `$dm$title[Comandos de leveling]$description[
- $getServerVar[prefix]leveling enable/disable
- $getServerVar[prefix]xpcooldown
- $getServerVar[prefix]l-leaderboard]
$color[D1BBBB]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`






})