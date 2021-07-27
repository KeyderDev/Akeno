module.exports = [{
    name: "antilinks-on",
    aliases: ['Activarantilink'],
    code: `<a:checkanimado:831161301282979911>| El antilink a sido habilitado
   $setServerVar[antilink;true]
   $onlyIf[$getServerVar[antilink]!=true;<a:checkanimado:831161301282979911>| El antilink ya a sido habilitado]
   $onlyPerms[manageserver;:x:| Necesitas el permiso de \`MANAGE_SERVER\` para usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
   
   name: "antilinks-off",
   aliases: ['disableal'],
   code: `<a:checkanimado:831161301282979911>| Antilinks desabilitado
     $setServerVar[antilink;false]
     $onlyIf[$getServerVar[antilink]!=false;:x:| El antilinks no esta activado]
     $onlyPerms[admin;:x:| Necesitas el permiso de  \`ADMINISTRATOR\` para usar este comando]
     $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
  :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
name: "$alwaysExecute",
code: `<a:checkanimado:831161301282979911>| $username a mandado un link y el antilinks a tomado accion
  $channelSendMessage[$getServerVar[LogsChannel];{title:Link borrado}{description:
  **Link borrado:** [link]($message[1])
  **Autor:** <@$authorID>
  **Sistema** Anti Links}
  {color:D1BBBB}]
     $deleteCommand
     $onlyIf[$checkContains[$message;.gif]!=true;]
     $onlyIf[$checkContains[$message;https#COLON#//;http#COLON#//;discord.com/;discord.gg/]!=false;]
     $onlyIf[$hasAnyPerm[managemessages;managechannels;manageserver]==false;]
     $onlyIf[$getServerVar[antilink]==true]
     `
   }]