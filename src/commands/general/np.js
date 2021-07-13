module.exports = ({
    name: "nowplaying",
    aliases: "np",
    code: `
     $color[D1BBBB]$thumbnail[$songInfo[thumbnail]]
     $author[Reproduciendo;$userAvatar[$songInfo[userID]]]
     $addField[Duracion;$songInfo[duration];yes]
     $addField[Añadido por;<@$songInfo[userID]>;yes]
     $addField[Cancion;[$songInfo[title]\\]($songInfo[url]);yes]
     $addField[Autor;[$songInfo[publisher]\\]($songInfo[publisher_url]);yes]
    
     $onlyIf[$songInfo[userID]!=;No hay nada reproduciendose]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
     `
     });