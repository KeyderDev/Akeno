//Code 1: Start Setup
module.exports = ({
name:"rr",
aliases:"start-rr",
description:"Start a reaction roles set up for the server!",
usage:"rr",
category:"RR",
code:`Alright. Lets start this reaction roles set up. Please mention how many roles would you like to add to the RR.
$deletein[10s]
$setservervar[cre;] $setservervar[crr;] $setservervar[rrc;0] $setservervar[cmid;] $setservervar[cb;]
$awaitmessages[$authorid;1m;everything;number;Time out!]
$onlyperms[manageserver;Not enough permissions!]`})
 
 
//Code 2: Number of rr
module.exports = [{
name:"number",
type:"awaitedCommand",module.exports = [{
name:"roles",
type:"awaitedCommand",
code:`$setservervar[crr;$getservervar[crr]$findrole[$message]$replacetext[$replacetext[$checkcondition[$sub[$getservervar[rrc];1]==0];true;./];false;.]]
Please react to the message you sent, with the emoji you want for this role!
$setservervar[cmid;$messageid]
$onlyif[$roleexists[$findrole[$message]]==true;Role not found!{execute:reset}]`}]
code:`$awaitmessages[$authorid;1m;everything;br;Time up!]
$setservervar[rrc;$message]
Ight, there will be $message RR(s). Please mention the blacklisted role(s) for all the rr of this set! If there are none to be blacklisted, enter anything random.
$onlyif[$isnumber[$message]==true;Not a valid number!]
$onlyif[$message!=0;Cannot set up 0 RRs!]`}]
 
 
//Code 3: Blacklisted roles
module.exports = [{
name:"br",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;everything;roles;Time up!]
$setservervar[cb;$replacetext[$replacetext[$checkcondition[$mentionedroles[1]==];true;a];false;$djsEval[let res = mentions.roles.map(x=>x.id).join('.')
d.array = res;yes]].l/]
Ight the blacklisted roles for the RR set up. Please mention the role you want to give with this RR.`}]
 
 
//Code 4: roles
module.exports = [{
name:"roles",
type:"awaitedCommand",
code:`$setservervar[crr;$getservervar[crr]$findrole[$message]$replacetext[$replacetext[$checkcondition[$sub[$getservervar[rrc];1]==0];true;./];false;.]]
Please react to the message you sent, with the emoji you want for this role!
$setservervar[cmid;$messageid]
$onlyif[$roleexists[$findrole[$message]]==true;Role not found!{execute:reset}]`}]
 
 
//Code 5: Messageid
module.exports = [{
name:"mid",
type:"awaitedCommand",
code:`$suppresserrors
$sendmessage[Complete!{execute:reset}{delete:3s};no]
$addmessagereactions[$mentionedchannels[1;yes];$message;$joinsplittext[;]]
$textsplit[$replacetext[$getservervar[cre];/;;1];.]
$setservervar[rrmid;$getservervar[rrmid]$message/]
$setservervar[rrr;$getservervar[rrr]$getservervar[crr]]
$setservervar[rre;$getservervar[rre]$getservervar[cre]]
$setservervar[rrc;]
$setservervar[rrb;$getservervar[rrb]$getservervar[cb]]
$setservervar[cmid;]
$onlyif[$messageexists[$mentionedchannels[1;yes];$message]==true;Message with that ID in <#$mentionedchannels[1;yes]> not found!{execute:reset}]
$suppresserrors`}]
 
 
//Code 6: Reset
module.exports = [{
name:"reset",
type:"awaitedCommand",
code:`$setservervar[cre;]
$setservervar[crr;]
$setservervar[rrc;a]
$setservervar[cb;]
$setservervar[cmid;]`}]
 
 
//Code 7: Add rr
module.exports = ({
name:"add-rr",
category:"RR",
description:"Add a reaction role to an already existing message!",
usage:"add-rr <message id> <role name/mention/id> <emoji>",
code:`$setservervar[rrr;$replacetext[$getservervar[rrr];$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$message[1]]];$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$message[1]]].$findrole[$message[2]].;1]]
$deletecommand
$deletein[10s]
$suppresserrors
$addmessagereactions[$channelid;$message[1];$emojisfrommessage[$message[3]]]
I successfully added a reaction role with the emoji $emojisfrommessage[$message[3]] and it will give the role $rolename[$findrole[$message[2]]]!
$setservervar[rre;$replacetext[$getservervar[rre];$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$message[1]]];$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$message[1]]].$emojisfrommessage[$message[3]].;1]]
$onlyif[$findtextsplitindex[$message[1]]!=0;Could not find that message ID in the reaction roles!]
$suppresserrors
$textsplit[$getservervar[rrmid];/]
$onlyif[$emojisfrommessage[$message[3]]!=;Could not find the emoji!]
$onlyif[$findrole[$message[2]]!=;Could not find the role with the name/id \`$message[2]\`!]
$onlyif[$getmessage[$channelid;$message[1];userID]==$clientid;Not a client message! Try getting a message from this channel itself, or execute this in the channel where the message is from!]
$onlyif[$messageexists[$channelid;$message[1]]==true;Could not find the message with the id \`$message[1]\` in this channel!]
$onlyif[$message[3]!=;Invalid args. Try using \`$getservervar[prefix]add-rr <message id> <role mention/name/id> <emoji>\`]
$onlyperms[manageserver;Not required permissions! You need \`manage server\` permissions!]
$suppresserrors`})
 
 
//Code 8: Delete rr
module.exports = ({
name:"delete-rr",
category:"RR",
description:"Delete a reaction role to an already existing message!",
usage:"delete-rr <message id>",
code:`$setservervar[rrmid;$replacetext[$getservervar[rrmid];$message[1]/;;1]]
$setservervar[rrr;$replacetext[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$message[1]]];;1]]
$setservervar[rre;$replacetext[$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$message[1]]];;1]]
$setservervar[rrb;$replacetext[$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$message[1]]];;1]]
$deletecommand
$deletein[5s]
I successfully deleted the reaction role with the messageid as $message[1]!
$deletemessage[$message[1]]
$onlyif[$findtextsplitindex[$message[1]]!=0;Could not find that message ID in the reaction roles!]
$textsplit[$getservervar[rrmid];/]
$onlyif[$messageexists[$channelid;$message[1]]==true;Could not find the message with the id \`$message[1]\` in this channel!]
$onlyif[$message[1]!=;Invalid args. Try using \`$getservervar[prefix]delete-rr <message id>\`]
$onlyperms[manageserver;Not required permissions! You need \`manage server\` permissions!]`})
 
 
 
 
Reaction Events:
bot.reactionAddCommand({
channel:"$channelID",
code:`$if[$messageid==$getservervar[cmid]]
$setservervar[cre;$getservervar[cre]$emojitostring.]
Alright, please mention the roles for the next RR!
$awaitmessages[$authorid;1m;everything;roles;Time up!{execute:reset}]
$setservervar[rrc;$sub[$getservervar[rrc];1]]
$else
$endif
$onlyif[$sub[$getservervar[rrc];1]!=0;{execute:z}]
$onlyif[$getservervar[rrc]!=a;{execute:r}]
$suppresserrors`})
bot.onReactionAdd()
bot.reactionAddCommand({
channel:"$channelid",
code:`$giverole[$authorid;$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]]]
$senddm[$authorid;You were given the role \`$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]\` on the event on reaction of $emojitostring in **$servername**!
$onlyif[$emojitostring==$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]];]
$onlyif[$checkcontains[$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]];.]!=true;{execute:mr}]
$onlyif[$djseval[let array = ['$joinsplittext[',']']
array.filter(fil => fil.toLowerCase().includes('$messageid'.toLowerCase())).find(F =>F);yes]!=undefined;]
$textsplit[$getservervar[rrmid];/]
$setuservar[e;$emojitostring]
$setuservar[mid;$messageid]
$suppresserrors`})
bot.awaitedCommand({
name:"dm",
code:`$senddm[$authorid;You did not recieve the role, because you had one of the blacklisted roles for that role!]
$clearreactions[$channelid;$getuservar[mid];$authorid;$getuservar[e]]
$onlyif[$checkcontains[$userroles[$authorid;ids;:];$joinsplittext[;]]==false;]
$textsplit[$advancedtextsplit[$getservervar[rrb];/;$findtextsplitindex[$messageid]];.]
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.awaitedCommand({
name:"r", 
code:`$giverole[$authorid;$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]
$senddm[$authorid;You were given the role \`$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]\` on the event on reaction of $emojitostring in **$servername**!
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.awaitedCommand({
name:"z",
code:`$setservervar[cre;$getservervar[cre]$emojitostring./]
$setservervar[rrc;]
Ight, all the roles and emojis set up! Please send the ID of the message. If it is not from this channel, mention the channel and then put the message ID!
$awaitmessages[$authorid;2m;everything;mid;Time out!{execute:reset}]
$onlyif[\`$messageid\`==\`$getservervar[cmid]\`;]
$suppresserrors`})
bot.awaitedCommand({
name:"mr",
code:`$senddm[$authorid;Sorry, I could not give you the role, because you have one of the blacklisted roles for that RR!]
$clearreactions[$channelid;$getuservar[mid];$authorid;$getuservar[e]]
$onlyif[$checkcontains[$userroles[$authorid;ids;:];$joinsplittext[;]]!=false;{execute:gr}]
$textsplit[$replacetext[$advancedtextsplit[$getservervar[rrb];/;$findtextsplitindex[$messageid]];.l;;1];.]
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.awaitedCommand({
name:"gr",
code:`$giverole[$authorid;$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]
$senddm[$authorid;You were given the role \`$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]\` on the event on reaction of $emojitostring in **$servername**!
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.awaitedCommand({
name:"er",
code:`$takerole[$authorid;$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]
$senddm[$authorid;Your role \`$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]\` was taken, on the event on reaction of $emojitostring in **$servername**!
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.reactionRemoveCommand({
channel:"$channelid",
code:`$takerole[$authorid;$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]]]
$senddm[$authorid;Your role \`$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[rrr];/;$findtextsplitindex[$messageid]];.;$sum[$djseval["$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]]".split(".").indexOf("$emojitostring");yes];1]]]\` was taken, on the event on reaction of $emojitostring in **$servername**!
$onlyif[$emojitostring==$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]];]
$onlyif[$checkcontains[$advancedtextsplit[$getservervar[rre];/;$findtextsplitindex[$messageid]];.]!=true;{execute:er}]
$onlyif[$djseval[let array = ['$joinsplittext[',']']
array.filter(fil => fil.toLowerCase().includes('$messageid'.toLowerCase())).find(F =>F);yes]!=undefined;]
$textsplit[$getservervar[rrmid];/]
$suppresserrors`})
bot.onReactionRemove()
 
 
 
 
 
 
Variables:
  rre:"",//emojis
  rrr:"",//roles
  rrmid:"",//message ids
  rrb:"",//blacklisted final roles
  cb:"",//current blacklisted roles
  cmid:"",//current msgid
  rrc:"a",//current no.of rr
  crr:"",//current roles
  cre:"",//current emojis,
  e:"",//emoji with which user reacts