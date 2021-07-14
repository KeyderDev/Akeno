module.exports = ({
    name: "$alwaysExecute",
    code: `<a:checkanimado:831161301282979911>| $username a mandado un link y el antilinks a tomado accion
$channelSendMessage[$getServerVar[LogsChannel];$title[Link borrado]$description[
**Link borrado:** [link]($message[1])
**Autor:** <@$authorID>]]
$color[D1BBBB]]
   $deleteCommand
   $onlyIf[$checkContains[$message;.gif]!=true;]
   $onlyIf[$checkContains[$message;https#COLON#//;http#COLON#//]==true;]
   $onlyIf[$hasAnyPerm[managemessages;managechannels;manageserver]==false;]
   $onlyIf[$getServerVar[antilink]==true]
   `
   })