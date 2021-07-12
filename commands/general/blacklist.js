module.exports = ({
name: "blacklist",
aliases: ["bl"],
code: `
$title[Usuario metido en la lista negra]
$description[El usuario \`$userTag[$findUser[$message[1]]]\` fue metido a la lista negra 
Desarrollador: <@$authorID>
Usuario: $userTag[$findUser[$message[1]]]
Razon: $messageSlice[1]]
$color[5865F2]
$writefile[./blacklistid;$userID[$message[1]];]
$setGlobalUserVar[bl;true;$findUser[$message[1]]]
$setGlobalUserVar[bld;$authorID;$findUser[$message[1]]]
$setGlobalUserVar[blr;$messageSlice[1];$findUser[$message[1]]]
$setVar[blt;$getVar[blt], \$userTag[$findUser[$message[1]]]]
$onlyForIDs[798250899041681428;788869971073040454;:x:| Solo mi desarrollador puede usar este comando]
`
});