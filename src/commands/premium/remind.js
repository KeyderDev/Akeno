module.exports = ({
name: "remind",
code: `Te recordare **$messageSlice[1]** luego de $message[1]!
$setTimeout[$message[1];
remindID: $authorID 
remindMessage: $messageSlice[1]]

$onlyIf[$checkContains[$toLowercase[$message[1]];s;m;h;d;w]==true;:x:| Ha ocurrido un error con el tiempo, compruebe haberlo escrito bien!]
$onlyIf[$isNumber[$cropText[$message[1];$math[$charCount[$message[1]]-1]]]==true;:x:| Por favor ingrese __numeros__ validos!]
$onlyIf[$math[$charCount[$message[1]]-1]!=0;:x:| Ha ocurrido un error con el tiempo, compruebe haberlo escrito bien!]
$onlyIf[$message[1]!=;:x:| Por favor establezca el tiempo!]
$onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]

`});

