module.exports = ({
    name: 'smile',
    description: 'Return a random smile gif',
    code: `
   $description[**$username[$findUser[$message[1]]]** esta sonriendo :3]
   $image[$jsonRequest[https://my.fuyuumi.ga/api/img/sfw/gif/smile;link]]
   $color[RANDOM]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })