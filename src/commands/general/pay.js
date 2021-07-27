module.exports = ({
    name: "pay", 
    aliases: ['give'],
    cat: "Economy",
    sub: "Main",
    usage: "pay (Usuario) (Cantidad)",
    desc: "Pay another user ServiceCoin (Currency).",
    code: 
    `
    $reply[$messageID;
    {color:D1BBBB}
    {thumbnail:$userAvatar[$findMember[$message[1]]]}
    {title:Pago}
    {description:Le diste a <@$findMember[$message[1]]> $message[2] dolares!}
    {timestamp:ms};no]
   
    $setUserVar[Money;$sum[$getUserVar[Money;$findMember[$message[1]]];$message[2]];$findMember[$message[1]]]
    $setUserVar[Money;$sub[$getUserVar[Money];$message[2]]]
   
    $cooldown[3s;Espera 3 segundos para volver a utilizar este comando]
   
    $onlyIf[$message[2]<=$getUserVar[Money;$authorID];:x:| Necesitas tener el dinero en efectivo para poder darselo a $mentioned[1]{delete:10s}]
    $onlyIf[$message[2]>0;:x:| No puedes dar menos de 0 $getServerVar[Money]!{delete:10s}]
    $onlyIf[$isNumber[$message[2]]==true;:x:| Uso correcto: \`$getServerVar[prefix]pay $message[1] (Cantidad)\`{delete:10s}]
    $onlyIf[$findMember[$message[1]]!=$authorID;:x:| No te puedes dar dinero a ti mismo!{delete:10s}]
    $argsCheck[>1;Uso correcto: \`$getServerVar[prefix]pay (Usuario) (Cantidad)\`{delete:10s}]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    ` 
   })