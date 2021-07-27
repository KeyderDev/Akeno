module.exports = ({
    name: "use-moneyspell",
    code: `$title[Haz usado tu pocion de dinero]$description[
Usaste tu pocion de dinero y ganaste $random[1000;2000]
$color[D1BBBB]
  $setUserVar[Money;$sum[$getUserVar[Money;$authorID];1];$authorID]
$onlyIf[1<=$getUserVar[moneyspell];:x: | Necesitas (Pocion de dinero x1)]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
  :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})