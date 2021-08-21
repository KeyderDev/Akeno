module.exports = {
  name: "supermarket",
  code: `$title[Compra Hecha]
  $description[Fuiste al supermercado y recibiste:
  Masa:
  Zanahorias:
  Pan:
  Lechuga:]
  $color[GREEN]
  $onlyIf[500!=$getUserVar[Money];:x:| Necesitas tener <:akenocoin:842884874729816114>500 para ir al supermercado]
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral;$authorID]!=false;<a:wrong:869274854157848687> Lo sentimos, este comando solo esta disponible para usuarios con Premium Pro o Premium Classic]
  $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
