module.exports = ({
name: "clap",
code: `$title[Eso se merece un aplauso!]
$description[Clap Clap]
$footer[]
$color[D1BBBB]
$image[$randomText[https://media.tenor.com/images/937713f2a6267da8024877dc1a72f29d/tenor.gif;https://media.tenor.com/images/816d302443345b7faca8b7be914840f9/tenor.gif;https://media.tenor.com/images/6d00c43b886d1157a43060c70a50e269/tenor.gif;https://media.tenor.com/images/d39481b72eae17137506512aa4b1f1b1/tenor.gif;https://media.tenor.com/images/62807ed7f15d3896d9793dd5e53e07d1/tenor.gif;https://media.tenor.com/images/16d1a9213df9e16019de8957ddbcb554/tenor.gif;https://media.tenor.com/images/37966c2e0ce4cda43e6d767ee3586704/tenor.gif;https://media.tenor.com/images/9c83908a9d5f7bb2fd80bde68f32ade2/tenor.gif;https://media.tenor.com/images/e721bc50dde92f8a7a4cfeaa49078b04/tenor.gif;https://media1.tenor.com/images/c7527d1e9e4f45d22e26d55824cbb76b/tenor.gif?itemid=18502653]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`



})