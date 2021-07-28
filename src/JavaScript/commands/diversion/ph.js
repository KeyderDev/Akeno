module.exports = ({
    name: "ph",
    code: `$attachment[$jsonRequest[https://nekobot.xyz/api/imagegen?type=phcomment&image=$replaceText[$useravatar[$mentioned[1;yes]];.webp;.png]&text=$replaceText[$noMentionMessage&username=$username[$mentioned[1;yes]]; ;+;-1]&raw=2;message;error;Content-Type:application/json];phcomment.png]
    $onlyNSFW[:x:| Este comando solo puede ser ejecutado en un canal marcado como **NSFW**]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   })