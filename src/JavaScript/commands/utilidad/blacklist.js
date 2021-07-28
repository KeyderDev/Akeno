module.exports = ({
name: "blacklist",
aliases: ["bl"],
code: `
$title[Usuario metido en la lista negra]
$description[El usuario \`$userTag[$findUser[$message[1]]]\` fue metido a la lista negra 
Desarrollador: <@$authorID>
Usuario: $userTag[$findUser[$message[1]]]
Razon: $messageSlice[1;40]]
$color[5865F2]

$sendDM[$findUser[$message[1]];{title:Fuiste metido a la lista negra del bot $username[$clientID]}{description:
Desarrollador: <@$authorID>
Usuario: $userTag[$findUser[$message[1]]]
Razon: $messageSlice[1;40]}
{color:5865F2}]
$writeFile[./id-bl.sql;Usuario: $message[1] | ID: $authorID] 
$setGlobalUserVar[PREMIUM;false;$findUser[$message[1]]]
$setGlobalUserVar[DCM;;$findUser[$message[1]]]
$setGlobalUserVar[bughunter;;$findUser[$message[1]]]
$setGlobalUserVar[premiumbadge;;$findUser[$message[1]]]
$setGlobalUserVar[devbadge;;$findUser[$message[1]]]
$setGlobalUserVar[workerbadge;;$findUser[$message[1]]]
$setGlobalUserVar[bugfixer;;$findUser[$message[1]]]
$setGlobalUserVar[betabadge;;$findUser[$message[1]]]
$setGlobalUserVar[pibadge;;$findUser[$message[1]]]
$setGlobalUserVar[pstatus;;$findUser[$message[1]]]
$setGlobalUserVar[sbl;:white_check_mark:;$findUser[$message[1]]] 


$setGlobalUserVar[bl;true;$findUser[$message[1]]]
$setGlobalUserVar[bld;$authorID;$findUser[$message[1]]]
$setGlobalUserVar[blr;$messageSlice[1];$findUser[$message[1]]]
$setVar[blt;$getVar[blt], \$userTag[$findUser[$message[1]]]]
$onlyForIDs[798250899041681428;788869971073040454;:x:| Solo los desarrolladores pueden usar este comando]
`
}); 