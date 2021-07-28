module.exports = ({
    name:"anime", 
    description: "Search anime info via title",
    usage: "anime <anime title>",
    code:`
    $author[・ $jsonRequest[https://api.avux.ga/animesearch?search=$message;res.title;];$userAvatar[$clientID];$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.url;]]
    
    $description[$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.synopsis;]]
    
    $addField[Genero;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.genres;];no]
    $addField[Popularidad;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.popularity;];yes]
    $addField[Duracion;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.duration;];yes]
    $addField[Episodios;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.episodes;];yes]
    $addField[Rating;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.premiered;];yes]
    $addField[Status;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.status;];yes]
    $addField[Tipo;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.type;];yes]
    
    $color[33f3ff]
    $image[$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.picture;]]
    $footer[Solicitado por $userTag[$authorID];$authorAvatar]
    
    
    $onlyIf[$message[1]!=;{author:ERROR:$userAvatar[$clientID]}{description:Necesitas poner el titulo de un anime}{color:33f3ff}]
    {color:RED}]
    $cooldown[5s;{description:Hey, espera un poco antes de volver a usar este comando, espera **$replaceText[%time%;s;seconds]**.}{color:FF0000}{delete:5s}]
    $suppressErrors[{author:No encontrado:$userAvatar[$clientID]}{description:Se un poco mas especifico}{color:D1BBBB}]
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]==true;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `});