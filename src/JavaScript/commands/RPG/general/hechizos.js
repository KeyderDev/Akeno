module.exports = ({
name: "libro-hechizos",
code: `$color[9B1DA7]$title[El libro de los hechizos!]$description[
Aqui tienes todos los hehizos hechos y por hacer!

Para hechizo de dinero: Zanahoria x3, Polvo de suerte x1, Ojo de araña x3  - $getServerVar[prefix]craft-moneyspell

Para hechizo de Himato: Fragmento de himato x20, Elixir Magico x1 - $getServerVar[prefix]craft-himatospell]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})