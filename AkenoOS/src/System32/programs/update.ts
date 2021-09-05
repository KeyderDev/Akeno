module.exports = {
  name: "update",
  code: `
  $if[$getVar[update_available]!=true]
  AkenoOS has been updated correctly
  $setGlobalUserVar[user_uptodate;true;$authorID]
  $elseIf[$getVar[update_available]!=false]
  There is no update available
  $endelseif
  $elseIf[$getGlobalUserVar[user_uptodate]!=true]
  You have the latest version of AkenoOS
  $endelseif
  $else
  $endif
  $onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
  $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
  :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
