module.exports = ({
    name: "hentai",
    code: `
    
    $title[:underage:Hentai:underage:] 
    $image[https://cdn.nekos.life/hentai/sex$random[1;99].jpg]
    $addTimestamp
    $footer[Requested by: $username]
    $addTimestamp
    $color[D1BBBB]
$onlyNSFW[:x: Este comando solo se puede ejecutar en un canal marcado como **NSFW**]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})