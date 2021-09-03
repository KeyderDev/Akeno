module.exports = {
  name: "rbshop",
  code: `$title[Robot Shop]$description[
  Esta es la tienda de los robots, donde puedes encontrar piezas para tu robot
  RB Ram:
  RB MotherBoard
  RB Chasis:
  RB Hard Drive Disk:
  Memory Module:]
  $color[BLUE]
  $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
