module.exports = ({
    name: "dpbalance",
    aliases: "dpbal",
    code: `$thumbnail[$authorAvatar]
    $title[Aquí esta tu balance de **DEVPOINTS** $username]
    $description[
    DEV POINTS:
    <:devpoint:832409886913462293>$getUserVar[devpoint;$authorID]
    $footer[Felicidades!]
    $color[33f3ff]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})