module.exports = ({
    name: "use-himatospell",
    code: `$title[Haz usado tu pocion Himato]$description[
Usaste tu pocion de Himato y ganaste 3,000 fragmentos de Himato
$color[D1BBBB]
  $setUserVar[fhimato;$sum[$getUserVar[fhimato;$authorID];1];$authorID]
$onlyIf[1<=$getUserVar[himatospell];:x: | Necesitas (Pocion de Himato x1)]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
  :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})