module.exports = {
  name: "buy-rbram",
  code: `<a:checkanimado:831161301282979911> Compra hecha correctamente!
  $setGlobalUserVar[rbram;1;$authorID]
  $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}
