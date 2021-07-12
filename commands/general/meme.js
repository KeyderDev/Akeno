module.exports = ({
name: "meme",
code: `$color[D1BBBB]$title[Meme]$image[https://ctk-api.herokuapp.com/meme/$random[1;2300]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})