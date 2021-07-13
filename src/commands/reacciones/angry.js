module.exports = ({
    name: "angry",
    code: `$title[Porque estas enojad@?]
    $description[**<@$authorID> esta muy enojad@!!!**]
    $image[https://api.fuyuumi.ga/api/angry$random[1;40].gif]
    $color[00000F]
    
    $footer[Solicitado por $username#$discriminator[$authorID]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
})