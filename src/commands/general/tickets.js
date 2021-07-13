//Code 1: Start Setup
module.exports = ({
name:"tickets",
aliases:['set-tickets'],
code:`$awaitmessages[$authorid;10m;everything;msg;Time out!]
:x:| Por favor ingresa el mensaje que quieras
$setservervar[tm;$messageslice[1]]
$setservervar[tc;$findchannel[$message[1]]]
$argscheck[>2;:x:| Ha ocurrido un error, intenta usar \`$getservervar[prefix]tickets <canal en donde ira el ticket> <topico del ticket>\`]
$onlyif[$channelexists[$findchannel[$message[1]]]==true;:x:| Ha ocurrido un error, intenta usar \`$getservervar[prefix]tickets <canal en donde ira el ticket> <topico del ticket>\`]
$onlyPerms[manageserver;:x:| Necesitas el permiso de \`Manejar Servidor\` para usar este comando]`})
 
 
//Code 2: Message
module.exports = [{
name:"msg",
type:"awaitedCommand",
code:`$if[$getservervar[tmid]==a]
$setservervar[tmid;$splittext[1]/]
$else
$setservervar[tmid;$getservervar[tmid]$splittext[1]/]
$endif
$setservervar[tmm;$getservervar[tmm]$message/]
:x:| Porfavor ingresa la id de la categoria donde el ticket se abrira
$awaitmessages[$authorid;1m;everything;category;Time out!]
$setservervar[tm;]
$setservervar[tc;]
$textsplit[$channelsendmessage[$getservervar[tc];{title:Tickets}{description:$getservervar[tm]}{footer:Reacciona a 🎫 para crear un ticket!}{color:YELLOW}{reactions:🎫};yes]; ]
$onlyif[$channelexists[$findchannel[$message[1]]]==true;:x:| No se pudo encontrar el canal!]`}]
 
 
//Code 3: Category
module.exports = [{
name:"category",
type:"awaitedCommand",
code:`$setservervar[tmc;$getservervar[tmc]$message/]
Setup completado
$onlyif[$channelexists[$message]==true;:x:| No se pudo encontrar la categoria!]`}]
 
  
//Code 4: Tciekt Settings
module.exports = ({
name:"ticket-settings",
aliases:['settings'],
code:`$reactioncollector[$splittext[1];$authorid;2m;🔒,♻️,✔️,❌,➕,📓;lock,rename,solve,unsolve,modify,transcript;yes]
$textsplit[$sendmessage[{title:Configuracion del ticket}{description:Reaccione a 🔒 para cerrar el ticket\nReaccione a ♻️ para renombrar el ticket\nReaccione a ✔️ to para solucionar el ticket\nReaccione a ❌ para desresolver el ticket\nReaccione a ➕ para añadir/sacar alguien del ticket\nReact with 📓 to get this ticket's transript in DMs}{color:YELLOW}{footer:Infinix tickets | Created with ❤️:$useravatar[$clientid]}{thumbnail:https://media3.giphy.com/media/XE1dxQ9eoIcamQc6NI/giphy.gif?cid=6c09b952jtpie2iwfw15ga2rvnwk18n6z6648oasooanewwk&rid=giphy.gif&ct=s};yes]; ]
$onlyif[$isticket==true;Not a ticket!]
$onlyperms[managechannels;You need the manage messages permissions to execute this!]`})
 
 
//Code 5: Transcript
module.exports = [{
name:"transcript",
type:"awaitedCommand",
code:`$dm[$authorid]
Transcript for the ticket \`$channelname\`, opened by $usertag[$getchannelvar[to]]
$createfile[$getchannelvar[t];Transcript of $channelname.txt]`}]
 
 
//Code 6: Solve
module.exports = [{
name:"transcript",
type:"awaitedCommand",
code:`$dm[$authorid]
Transcript for the ticket \`$channelname\`, opened by $usertag[$getchannelvar[to]]
$createfile[$getchannelvar[t];Transcript of $channelname.txt]`}]
 
 
//Code 7: Unsolve
module.exports = [{
name:"unsolve",
type:"awaitedCommand",
code:`$editchannel[$channelid;$default;ticket-$username[$getchannelvar[to]]-$discriminator[$getchannelvar[to]];$default;$default;$default;$default;yes]
I succuessfuly marked this ticket as solved!
$onlyif[$checkcontains[$channelname;solved]==true;Ticket already unsolved!]`}]
 
 
//Code 8: Modify
module.exports = [{
name:"modify",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;add,remove;add,remove;Time out!]
Please put whether you would like to \`add\` or \`remove\` a role/user`}]
 
 
//Code 9: Remove 
module.exports = [{
name:"remove",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;everything;rmodify;Time out!]
Please enter the role/member who's permissions should be change to "unviewable" for the channel!`}]
 
 
//Code 10: Add
module.exports = [{
name:"add",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;everything;amodify;Time out!]
Please enter the role/member who's permissions should be change to "viewable" for the channel!`}]
 
 
//Code 11: Add Member
module.exports = [{
name:"amodify",
type:"awaitedCommand",
code:`$if[$roleexists[$findrole[$message]]==true]
$modifychannelperms[$channelid;+sendmessages;$findrole[$message]]
$modifychannelperms[$channelid;+readmessages;$findrole[$message]]
Gave access to the role!
$elseif[$memberexists[$findmember[$message]]==true]
$modifychannelperms[$channelid;+sendmessages;$findmember[$message]]
$modifychannelperms[$channelid;+readmessages;$findmember[$message]]
Gave access to the user!
$endelseif
$else
Could not find the role/user!
$endif`}]
 
 
//Code 12: Remove Member
module.exports = [{
name:"rmodify",
type:"awaitedCommand",
code:`$if[$roleexists[$findrole[$message]]==true]
$modifychannelperms[$channelid;-sendmessages;$findrole[$message]]
$modifychannelperms[$channelid;-readmessages;$findrole[$message]]
Removed access for the role!
$elseif[$memberexists[$findmember[$message]]==true]
$modifychannelperms[$channelid;-sendmessages;$findmember[$message]]
$modifychannelperms[$channelid;-readmessages;$findmember[$message]]
Removed access for the user!
$endelseif
$else
Could not find the role/user!
$endif`}]
 
 
//Code 13: Delete
module.exports = ({
name:"delete-ticket",
category:"Tickets",
description:"Delete a ticket system to an already existing message!",
usage:"delete-ticket <message id>",
code:`$setservervar[tmid;$replacetext[$getservervar[tmid];$message[1]/;;1]]
$setservervar[tmm;$replacetext[$getservervar[tmm];$advancedtextsplit[$getservervar[tmm];/;$findtextsplitindex[$message[1]]]/;;1]]
$setservervar[tmc;$replacetext[$getservervar[tmc];$advancedtextsplit[$getservervar[tmc];/;$findtextsplitindex[$message[1]]]/;;1]]
I successfully deleted the ticket with the message ID \`$message[1]\`!
$deletecommand
$deletein[10s]
$deletemessage[$message[1]]
$onlyif[$findtextsplitindex[$message[1]]!=0;Could not find that message ID in the reaction roles!]
$textsplit[$getservervar[tmid];/]
$onlyif[$messageexists[$channelid;$message[1]]==true;Could not find the message with the id \`$message[1]\` in this channel!]
$onlyif[$message[1]!=;Invalid args. Try using \`$getservervar[prefix]delete-ticket <message id>\`]
$onlyperms[manageserver;Not required permissions! You need \`manage server\` permissions!]`})
 
 
//Code 14: Rename
module.exports = [{
name:"rename",
type:"awaitedCommand",
code:`Please put the new name for this ticket!
$awaitmessages[$authorid;1m;everything;crename;Time out!]`}]
 
 
//Code 15: Complete Rename
module.exports = [{
name:"crename",
type:"awaitedCommand",
code:`$editchannel[$channelid;$default;$message;$default;$default;$default;$default;yes]
I succuessfuly renamed this ticket`}]
 
 
//Code 16: Close Ticket
module.exports = [{
name:"lock",
type:"awaitedCommand",
code:`$closeticket[]`}]
 
 
 
Reaction Add Event
bot.reactionAddCommand({
channel:"$channelid",
code:`$setchannelvar[to;$authorid;$splittext[1]]
$textsplit[$newticket[ticket-$username-$discriminator;<@$authorid> {title:Welcome to your ticket, $username!}{description:$advancedtextsplit[$getservervar[tmm];/;$findtextsplitindex[$messageid]]}{color:FFFF}{footer:$username[$clientid] tickets | Created with ❤️:$useravatar[$clientid]}{thumbnail:$authoravatar}{author:$usertag:$replacetext[$replacetext[$checkcondition[$servericon==];true;];false;$servericon]};$advancedtextsplit[$getservervar[tmc];/;$findtextsplitindex[$messageid]];yes;]; ]
$clearreactions[$channelid;$messageid;$authorid;$emojitostring]
$onlyif[$findtextsplitindex[$messageid]!=0;]
$onlyif[$isbot==false;]
$textsplit[$getservervar[tmid];/]
$onlyif[$getservervar[tmid]!=a;]
$onlyif[\`$emojitostring\`==\`🎫\`;]`})
bot.onReactionAdd()
 
Variables:
  tmid:"a",
  tmc:"",
  tmm:"",
  tm:"",
  tc:"",
  to:"",
  t:"",